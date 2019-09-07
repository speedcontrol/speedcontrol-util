/// <reference types="node" />
import { EventEmitter } from 'events';
import { RunDataActiveRunSurrounding, TimerChangesDisabled } from 'nodecg-speedcontrol/schemas';
import { RunData, RunDataActiveRun, RunDataArray, Timer } from 'nodecg-speedcontrol/types';
import { NodeCG, Replicant } from 'nodecg/types/server';
interface SpeedcontrolUtil {
    on(event: 'timerStarted', listener: () => void): this;
    on(event: 'timerResumed', listener: () => void): this;
    on(event: 'timerPaused', listener: () => void): this;
    on(event: 'timerStopped', listener: () => void): this;
    on(event: 'timerReset', listener: () => void): this;
    on(event: 'timerEdited', listener: () => void): this;
    on(event: 'timerTeamStopped', listener: (id: number) => void): this;
    on(event: 'timerTeamStopUndone', listener: (id: number) => void): this;
    on(event: string, listener: Function): this;
}
declare class SpeedcontrolUtil extends EventEmitter {
    private nodecg;
    readonly runDataArray: Replicant<RunDataArray>;
    readonly runDataActiveRun: Replicant<RunDataActiveRun>;
    readonly runDataActiveRunSurrounding: Replicant<RunDataActiveRunSurrounding>;
    readonly timer: Replicant<Timer>;
    timerChangesDisabled: Replicant<TimerChangesDisabled>;
    constructor(nodecg: NodeCG);
    /**
     * Returns the currently active run data object.
     */
    getCurrentRun(): RunDataActiveRun;
    /**
     * Returns the array of runs.
     */
    getRunDataArray(): RunDataArray;
    /**
     * Gets the next X runs in the schedule after the supplied run,
     * or after the currently active run if possible.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, will return runs after this one if supplied.
     */
    getNextRuns(amount?: number, run?: RunData | null): RunData[];
    /**
     * Attempt to find a run in the run data array from it's ID.
     * Will return -1 if it cannot be found.
     * @param arg Can either be a run data object or a unique ID string.
     */
    findRunIndex(arg?: RunData | string | null): number;
    /**
     * Gets the total amount of players in a specified run.
     * @param run Run data object.
     */
    static getRunTotalPlayers(run: RunData): number;
    /**
     * Goes through each team and players and makes a string to show the names correctly together.
     * @param run Run data object.
     */
    static formPlayerNamesStr(run: RunData): string;
    /**
     * Starts the nodecg-speedcontrol timer.
     */
    startTimer(): void;
    /**
     * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
     * @param teamID Team to stop the timer for; 1st team if none specified.
     */
    stopTimer(teamID?: number): void;
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    resetTimer(): void;
    /**
     * Prevent the nodecg-speedcontrol timer from being changed.
     */
    disableTimerChanges(): void;
    /**
     * Allow the nodecg-speedcontrol timer to be changed.
     */
    enableTimerChanges(): void;
}
export = SpeedcontrolUtil;
