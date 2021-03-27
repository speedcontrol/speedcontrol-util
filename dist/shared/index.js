"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTimerChange = void 0;
var events_1 = require("events");
var SpeedcontrolUtil = /** @class */ (function (_super) {
    __extends(SpeedcontrolUtil, _super);
    function SpeedcontrolUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Takes a run data object and returns a formed string of the player names.
     * @param runData Run Data object.
     */
    SpeedcontrolUtil.formPlayerNamesStr = function (runData) {
        return runData.teams.map(function (team) { return (team.players.map(function (player) { return player.name; }).join(', ')); }).join(' vs. ') || 'N/A';
    };
    /**
     * Gets the total amount of players in a specified run.
     * @param runData Run data object.
     */
    SpeedcontrolUtil.getRunTotalPlayers = function (runData) {
        return runData.teams.reduce(function (acc, team) { return (acc + team.players.reduce(function (acc_) { return acc_ + 1; }, 0)); }, 0);
    };
    return SpeedcontrolUtil;
}(events_1.EventEmitter));
// Emit events when the timer state changes.
function onTimerChange(class_, newVal, oldVal, opQ) {
    if (!oldVal) {
        return;
    }
    var oldState = oldVal.state;
    var newState = newVal.state;
    if (oldState !== newState) {
        if (newState === 'running') {
            if (oldState === 'paused') {
                class_.emit('timerResumed');
            }
            else if (oldState === 'stopped') {
                class_.emit('timerStarted');
            }
        }
        else if (newState === 'finished') {
            class_.emit('timerStopped');
        }
        else if (newState === 'paused') {
            class_.emit('timerPaused');
        }
        else if (newState === 'stopped') {
            class_.emit('timerReset');
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
            class_.emit('timerEdited');
        }
        // When teams stop/undo.
        if (operation.path === '/teamFinishTimes') {
            // @ts-ignore: args not properly defined in typings.
            var teamID = operation.args.prop;
            var time = newVal.teamFinishTimes[teamID];
            if (operation.method === 'add') {
                class_.emit('timerTeamStopped', teamID, time.state === 'forfeit');
            }
            else if (operation.method === 'delete') {
                class_.emit('timerTeamUndone', teamID);
            }
        }
    });
}
exports.onTimerChange = onTimerChange;
exports.default = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map