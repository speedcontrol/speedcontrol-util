"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const clone_1 = __importDefault(require("clone"));
const shared_1 = __importStar(require("../shared"));
const sc = 'nodecg-speedcontrol';
class SpeedcontrolUtil extends shared_1.default {
    constructor(nodecg) {
        super();
        this.runDataArray = nodecg.Replicant('runDataArray', sc);
        this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
        this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
        this.timer = nodecg.Replicant('timer', sc);
        this.runFinishTimes = nodecg.Replicant('runFinishTimes', sc);
        this.twitchCommercialTimer = nodecg.Replicant('twitchCommercialTimer', sc);
        this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
        this.sendMessage = nodecg.extensions[sc].sendMessage;
        this.listenFor = nodecg.extensions[sc].listenFor;
        // Emit events when the timer state changes.
        this.timer.on('change', (newVal, oldVal, opQ) => {
            (0, shared_1.onTimerChange)(this, newVal, oldVal, opQ);
        });
    }
    /**
     * Returns the currently active run data object.
     */
    getCurrentRun() {
        return (0, clone_1.default)(this.runDataActiveRun.value);
    }
    /**
     * Returns the array of runs.
     */
    getRunDataArray() {
        return (0, clone_1.default)(this.runDataArray.value);
    }
    /**
     * Gets the next X runs in the schedule after the supplied run,
     * or after the currently active run if possible.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, will return runs after this one if supplied.
     */
    getNextRuns(amount = 4, run) {
        let runIndex = this.findRunIndex(run || this.runDataActiveRunSurrounding.value.next);
        runIndex = (run) ? runIndex += 1 : runIndex;
        return this.getRunDataArray().slice(runIndex, runIndex + amount);
    }
    /**
     * Attempt to find a run in the run data array from it's ID.
     * Will return -1 if it cannot be found.
     * @param arg Can either be a run data object or a unique ID string.
     */
    findRunIndex(arg) {
        let runId = arg;
        if (arg && typeof arg !== 'string') {
            runId = arg.id;
        }
        return this.getRunDataArray().findIndex((run) => run.id === runId);
    }
    /**
     * Starts the nodecg-speedcontrol timer.
     */
    startTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendMessage('timerStart');
        });
    }
    /**
     * Stops the nodecg-speedcontrol timer for the specified team index,
     * or the 1st team if none specified.
     * @param teamIndex Index of team to stop the timer for, defaults to 1st (0).
     */
    stopTimer(teamIndex = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const run = this.getCurrentRun();
            let uuid;
            if (run && run.teams[teamIndex]) {
                uuid = run.teams[teamIndex].id;
            }
            if (run && !uuid) {
                throw new Error(`Run is active but team with index ${teamIndex} unavailable`);
            }
            return this.sendMessage('timerStop', { id: uuid });
        });
    }
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    resetTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendMessage('timerReset');
        });
    }
    /**
     * Prevent the nodecg-speedcontrol timer from being changed.
     */
    disableTimerChanges() {
        this.timerChangesDisabled.value = true;
    }
    /**
     * Allow the nodecg-speedcontrol timer to be changed.
     */
    enableTimerChanges() {
        this.timerChangesDisabled.value = false;
    }
    /**
     * Attempts to start a Twitch commercial on the set channel in the bundle.
     */
    startTwitchCommercial(duration) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendMessage('twitchStartCommercial', { duration });
        });
    }
}
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map