"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var clone_1 = __importDefault(require("clone"));
var events_1 = require("events");
var sc = 'nodecg-speedcontrol';
var SpeedcontrolUtil = /** @class */ (function (_super) {
    __extends(SpeedcontrolUtil, _super);
    /* eslint-enable lines-between-class-members */
    function SpeedcontrolUtil(nodecg) {
        var _this = _super.call(this) || this;
        _this.nodecg = nodecg;
        _this.runDataArray = nodecg.Replicant('runDataArray', sc);
        _this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
        _this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
        _this.timer = nodecg.Replicant('timer', sc);
        _this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
        // Emit events when the timer state changes.
        _this.timer.on('change', function (newVal, oldVal, opQ) {
            if (!oldVal) {
                return;
            }
            var oldState = oldVal.state;
            var newState = newVal.state;
            if (oldState !== newState) {
                if (newState === 'running') {
                    if (oldState === 'paused') {
                        _this.emit('timerResumed');
                    }
                    else if (oldState === 'stopped') {
                        _this.emit('timerStarted');
                    }
                }
                else if (newState === 'finished') {
                    _this.emit('timerStopped');
                }
                else if (newState === 'paused') {
                    _this.emit('timerPaused');
                }
                else if (newState === 'stopped') {
                    _this.emit('timerReset');
                }
            }
            if (!opQ) {
                return;
            }
            opQ.forEach(function (operation) {
                // If timer is paused/stopped and the time changes, it was edited somehow.
                if (['paused', 'stopped'].includes(newState) && oldState === newState
                    && operation.path === '/' && operation.method === 'update'
                    // @ts-ignore: args not properly defined in typings.
                    && operation.args.prop === 'milliseconds') {
                    _this.emit('timerEdited');
                }
                // When teams stop/undo.
                if (operation.path === '/teamFinishTimes') {
                    // @ts-ignore: args not properly defined in typings.
                    var teamID = operation.args.prop;
                    if (operation.method === 'add') {
                        _this.emit('timerTeamStopped', teamID);
                    }
                    else if (operation.method === 'delete') {
                        _this.emit('timerTeamStopUndone', teamID);
                    }
                }
            });
        });
        return _this;
    }
    /**
     * Returns the currently active run data object.
     */
    SpeedcontrolUtil.prototype.getCurrentRun = function () {
        return clone_1.default(this.runDataActiveRun.value);
    };
    /**
     * Returns the array of runs.
     */
    SpeedcontrolUtil.prototype.getRunDataArray = function () {
        return clone_1.default(this.runDataArray.value);
    };
    /**
     * Gets the next X runs in the schedule after the supplied run,
     * or after the currently active run if possible.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, will return runs after this one if supplied.
     */
    SpeedcontrolUtil.prototype.getNextRuns = function (amount, run) {
        if (amount === void 0) { amount = 4; }
        var runIndex = this.findRunIndex(run || this.runDataActiveRunSurrounding.value.next);
        runIndex = (run) ? runIndex += 1 : runIndex;
        return this.getRunDataArray().slice(runIndex, amount);
    };
    /**
     * Attempt to find a run in the run data array from it's ID.
     * Will return -1 if it cannot be found.
     * @param arg Can either be a run data object or a unique ID string.
     */
    SpeedcontrolUtil.prototype.findRunIndex = function (arg) {
        var runId = arg;
        if (arg && typeof arg !== 'string') {
            runId = arg.id;
        }
        return this.getRunDataArray().findIndex(function (run) { return run.id === runId; });
    };
    /**
     * Gets the total amount of players in a specified run.
     * @param run Run data object.
     */
    SpeedcontrolUtil.getRunTotalPlayers = function (run) {
        return run.teams.reduce(function (acc, team) { return (acc + team.players.reduce(function (acc_) { return acc_ + 1; }, 0)); }, 0);
    };
    /**
     * Goes through each team and players and makes a string to show the names correctly together.
     * @param run Run data object.
     */
    SpeedcontrolUtil.formPlayerNamesStr = function (run) {
        return run.teams.map(function (team) { return (team.players.map(function (player) { return player.name; }).join(', ')); }).join(' vs. ') || 'No Player(s)';
    };
    // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
    /**
     * Starts the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.startTimer = function () {
        this.nodecg.sendMessageToBundle('startTimer', sc);
    };
    // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
    /**
     * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
     * @param teamID Team to stop the timer for; 1st team if none specified.
     */
    SpeedcontrolUtil.prototype.stopTimer = function (teamID) {
        if (teamID === void 0) { teamID = 0; }
        this.nodecg.sendMessageToBundle('stopTimer', sc, teamID);
    };
    // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.resetTimer = function () {
        this.nodecg.sendMessageToBundle('resetTimer', sc);
    };
    /**
     * Prevent the nodecg-speedcontrol timer from being changed.
     */
    SpeedcontrolUtil.prototype.disableTimerChanges = function () {
        this.timerChangesDisabled.value = true;
    };
    /**
     * Allow the nodecg-speedcontrol timer to be changed.
     */
    SpeedcontrolUtil.prototype.enableTimerChanges = function () {
        this.timerChangesDisabled.value = false;
    };
    return SpeedcontrolUtil;
}(events_1.EventEmitter));
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map