/// <reference types="node" />
import { EventEmitter } from 'events';
import { TimerChangesDisabled } from 'nodecg-speedcontrol/schemas';
import { RunData, RunDataActiveRun, RunDataArray, Timer } from 'nodecg-speedcontrol/types';
import { NodeCG, Replicant } from 'nodecg/types/server';
interface SpeedcontrolUtil {
    on(event: 'timerStarted', listener: () => void): this;
    on(event: 'timerResumed', listener: () => void): this;
    on(event: 'timerPaused', listener: () => void): this;
    on(event: 'timerFinished', listener: () => void): this;
    on(event: 'timerReset', listener: () => void): this;
    on(event: 'timerEdited', listener: () => void): this;
    on(event: 'timerTeamFinished', listener: (id: number) => void): this;
    on(event: 'timerTeamUndidFinish', listener: (id: number) => void): this;
    on(event: string, listener: Function): this;
}
declare class SpeedcontrolUtil extends EventEmitter {
    private nodecgContext;
    readonly runDataArray: Replicant<RunDataArray>;
    readonly runDataActiveRun: Replicant<RunDataActiveRun>;
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
     * Gets the next X runs in the schedule after the supplied run.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, defaults to current run. Will grab from the start if not set.
     */
    getNextRuns(amount?: number, run?: RunData | null): RunData[];
    /**
     * Find run data array index of current run based on it's ID.
     * Will return -1 if it cannot be found.
     * @param run Run data object, defaults to current run.
     */
    findIndexInRunDataArray(run?: RunData | null): number;
    /**
     * Gets the total amount of players in a specified run.
     * @param run Run data object.
     */
    static checkForTotalPlayers(run: RunData): number;
    /**
     * Goes through each team and players and makes a string to show the names correctly together.
     * @param run Run data object.
     */
    static formPlayerNamesString(run: RunData): string;
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
