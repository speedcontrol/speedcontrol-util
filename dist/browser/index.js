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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var shared_1 = __importStar(require("../shared"));
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
        _this.twitchCommercialTimer = nodecg.Replicant('twitchCommercialTimer', sc);
        _this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
        _this.nodecg = nodecg;
        // Emit events when the timer state changes.
        _this.timer.on('change', function (newVal, oldVal, opQ) {
            shared_1.onTimerChange(_this, newVal, oldVal, opQ);
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
        return clone_1.default(this.runDataArray.value || []);
    };
    /**
     * Gets the next X runs in the schedule after the supplied run,
     * or after the currently active run if possible.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, will return runs after this one if supplied.
     */
    SpeedcontrolUtil.prototype.getNextRuns = function (amount, run) {
        if (amount === void 0) { amount = 4; }
        var nextRun = (this.runDataActiveRunSurrounding.value)
            ? this.runDataActiveRunSurrounding.value.next : undefined;
        var runIndex = this.findRunIndex(run || nextRun);
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
                return [2 /*return*/, this.nodecg.sendMessageToBundle('timerStart', sc)];
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
                run = this.getCurrentRun();
                if (run && run.teams[teamIndex]) {
                    uuid = run.teams[teamIndex].id;
                }
                if (run && !uuid) {
                    throw new Error("Run is active but team with index " + teamIndex + " unavailable");
                }
                return [2 /*return*/, this.nodecg.sendMessageToBundle('timerStop', sc, { id: uuid })];
            });
        });
    };
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.resetTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.nodecg.sendMessageToBundle('timerReset', sc)];
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
    SpeedcontrolUtil.prototype.startTwitchCommercial = function (duration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.nodecg.sendMessageToBundle('twitchStartCommercial', sc, { duration: duration })];
            });
        });
    };
    return SpeedcontrolUtil;
}(shared_1.default));
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map