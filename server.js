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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var clone_1 = __importDefault(require("clone"));
var shared_1 = __importDefault(require("./shared"));
var sc = 'nodecg-speedcontrol';
var SpeedcontrolUtil = /** @class */ (function (_super) {
    __extends(SpeedcontrolUtil, _super);
    function SpeedcontrolUtil(nodecg) {
        var _this = _super.call(this) || this;
        _this.runDataArray = nodecg.Replicant('runDataArray', sc);
        _this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
        _this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
        _this.timer = nodecg.Replicant('timer', sc);
        _this.runFinishTimes = nodecg.Replicant('runFinishTimes', sc);
        _this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
        _this.sendMessage = nodecg.extensions[sc].sendMessage;
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
                    var time = newVal.teamFinishTimes[teamID];
                    if (operation.method === 'add') {
                        _this.emit('timerTeamStopped', teamID, time.state === 'forfeit');
                    }
                    else if (operation.method === 'delete') {
                        _this.emit('timerTeamUndone', teamID);
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
        return this.getRunDataArray().slice(runIndex, runIndex + amount);
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
     * Starts the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.startTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendMessage('timerStart')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Stops the nodecg-speedcontrol timer for the specified team index,
     * or the 1st team if none specified.
     * @param teamIndex Index of team to stop the timer for, defaults to 1st (0).
     */
    SpeedcontrolUtil.prototype.stopTimer = function (teamIndex) {
        if (teamIndex === void 0) { teamIndex = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var run, uuid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        run = this.getCurrentRun();
                        if (run && run.teams[teamIndex]) {
                            uuid = run.teams[teamIndex].id;
                        }
                        if (run && !uuid) {
                            throw new Error("Run is active but team with index " + teamIndex + " unavailable");
                        }
                        return [4 /*yield*/, this.sendMessage('timerStop', { id: uuid })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.resetTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendMessage('timerReset')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
    /**
     * Attempts to start a Twitch commercial on the set channel in the bundle.
     */
    SpeedcontrolUtil.prototype.startTwitchCommercial = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendMessage('twitchStartCommercial')];
            });
        });
    };
    return SpeedcontrolUtil;
}(shared_1.default));
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=server.js.map