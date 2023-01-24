"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTimerChange = void 0;
const events_1 = require("events");
class SpeedcontrolUtil extends events_1.EventEmitter {
    /**
     * Takes a run data object and returns a formed string of the player names.
     * @param runData Run Data object.
     */
    static formPlayerNamesStr(runData) {
        return runData.teams.map((team) => (team.players.map((player) => player.name).join(', '))).join(' vs. ') || 'N/A';
    }
    /**
     * Gets the total amount of players in a specified run.
     * @param runData Run data object.
     */
    static getRunTotalPlayers(runData) {
        return runData.teams.reduce((acc, team) => (acc + team.players.reduce((acc_) => acc_ + 1, 0)), 0);
    }
}
// Emit events when the timer state changes.
function onTimerChange(class_, newVal, oldVal, opQ) {
    if (!newVal || !oldVal) {
        return;
    }
    const oldState = oldVal.state;
    const newState = newVal.state;
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
    opQ.forEach((operation) => {
        // If timer is paused/stopped and the time changes, it was edited somehow.
        if (['paused', 'stopped'].includes(newState) && oldState === newState
            && operation.path === '/' && operation.method === 'update'
            && operation.args.prop === 'milliseconds') {
            class_.emit('timerEdited');
        }
        // When teams stop/undo.
        if (operation.path === '/teamFinishTimes' && 'args' in operation && 'prop' in operation.args) {
            const teamID = operation.args.prop;
            const time = newVal.teamFinishTimes[teamID];
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