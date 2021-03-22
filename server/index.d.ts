import { RunDataActiveRunSurrounding, TimerChangesDisabled, TwitchCommercialTimer } from '../../schemas';
import { CommercialDuration, ListenFor, RunData, RunDataActiveRun, RunDataArray, RunFinishTimes, SendMessage, SendMessageReturnMap, Timer } from '../../types';
import { NodeCGServer } from '../../types/nodecg/lib/nodecg-instance';
import { ReplicantServer } from '../../types/nodecg/lib/replicant';
import SpeedcontrolUtilShared from '../shared';
declare class SpeedcontrolUtil extends SpeedcontrolUtilShared {
    readonly runDataArray: ReplicantServer<RunDataArray>;
    readonly runDataActiveRun: ReplicantServer<RunDataActiveRun>;
    readonly runDataActiveRunSurrounding: ReplicantServer<RunDataActiveRunSurrounding>;
    readonly timer: ReplicantServer<Timer>;
    readonly runFinishTimes: ReplicantServer<RunFinishTimes>;
    readonly twitchCommercialTimer: ReplicantServer<TwitchCommercialTimer>;
    timerChangesDisabled: ReplicantServer<TimerChangesDisabled>;
    sendMessage: SendMessage;
    listenFor: ListenFor;
    constructor(nodecg: NodeCGServer);
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
