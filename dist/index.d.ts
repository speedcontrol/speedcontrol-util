import { NodeCG, Replicant } from 'nodecg/types/server';
interface RunData {
    game?: string;
    gameTwitch?: string;
    system?: string;
    region?: string;
    release?: string;
    category?: string;
    estimate?: string;
    estimateS?: number;
    setupTime?: string;
    setupTimeS?: number;
    scheduled?: string;
    scheduledS?: number;
    teams: RunDataTeams[];
    customData: {
        [key: string]: string;
    };
    id: number;
}
interface RunDataTeams {
    name?: string;
    id: number;
    players: RunDataPlayer[];
}
interface RunDataPlayer {
    name: string;
    id: number;
    teamID: number;
    country?: string;
    social: {
        twitch?: string;
    };
}
interface TimerBasic {
    time: string;
    state: string;
    milliseconds: number;
    timestamp: number;
}
interface Timer extends TimerBasic {
    teamFinishTimes: {
        [id: number]: TimerBasic;
    };
}
declare class SpeedcontrolUtil {
    private nodecgContext;
    runDataArray: Replicant<RunData[]>;
    runDataActiveRun: Replicant<RunData | undefined>;
    timer: Replicant<Timer>;
    constructor(nodecg: NodeCG);
    /**
     * Returns the currently active run data object.
     */
    getCurrentRun(): RunData | undefined;
    /**
     * Returns the array of runs.
     */
    getRunDataArray(): RunData[];
    /**
     * Gets the next X runs in the schedule after the supplied run.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, defaults to current run.
     */
    getNextRuns(amount?: number, run?: RunData | undefined): RunData[];
    /**
     * Find run data array index of current run based on it's ID.
     * @param run Run data object, defaults to current run.
     */
    findIndexInRunDataArray(run?: RunData | undefined): number;
    /**
     * Gets the total amount of players in a specified run.
     * @param run Run data object.
     */
    checkForTotalPlayers(run: RunData): number;
    /**
     * Goes through each team and players and makes a string to show the names correctly together.
     * @param run Run data object.
     */
    formPlayerNamesString(run: RunData): string;
}
export = SpeedcontrolUtil;
