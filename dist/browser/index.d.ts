import NodeCGTypes from '@alvancamp/test-nodecg-types';
import { CommercialDuration, RunData, RunDataActiveRun, RunDataArray, RunFinishTimes, SendMessageReturnMap, Timer } from '../../types';
import { RunDataActiveRunSurrounding, TimerChangesDisabled, TwitchCommercialTimer } from '../../types/schemas';
import SpeedcontrolUtilShared from '../shared';
declare class SpeedcontrolUtil extends SpeedcontrolUtilShared {
    readonly runDataArray: NodeCGTypes.ClientReplicant<RunDataArray>;
    readonly runDataActiveRun: NodeCGTypes.ClientReplicant<RunDataActiveRun>;
    readonly runDataActiveRunSurrounding: NodeCGTypes.ClientReplicant<RunDataActiveRunSurrounding>;
    readonly timer: NodeCGTypes.ClientReplicant<Timer>;
    readonly runFinishTimes: NodeCGTypes.ClientReplicant<RunFinishTimes>;
    readonly twitchCommercialTimer: NodeCGTypes.ClientReplicant<TwitchCommercialTimer>;
    timerChangesDisabled: NodeCGTypes.ClientReplicant<TimerChangesDisabled>;
    readonly nodecg: NodeCGTypes.ClientAPI;
    constructor(nodecg: NodeCGTypes.ClientAPI);
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
     * Starts the nodecg-speedcontrol timer.
     */
    startTimer(): Promise<void>;
    /**
     * Stops the nodecg-speedcontrol timer for the specified team index,
     * or the 1st team if none specified.
     * @param teamIndex Index of team to stop the timer for, defaults to 1st (0).
     */
    stopTimer(teamIndex?: number): Promise<void>;
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    resetTimer(): Promise<void>;
    /**
     * Prevent the nodecg-speedcontrol timer from being changed.
     */
    disableTimerChanges(): void;
    /**
     * Allow the nodecg-speedcontrol timer to be changed.
     */
    enableTimerChanges(): void;
    /**
     * Attempts to start a Twitch commercial on the set channel in the bundle.
     */
    startTwitchCommercial(duration?: CommercialDuration): Promise<SendMessageReturnMap['twitchStartCommercial']>;
}
export = SpeedcontrolUtil;
