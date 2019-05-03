import { NodeCG, Replicant } from 'nodecg/types/server';
interface RunData {
    id: number;
    teams: RunDataTeams[];
}
interface RunDataTeams {
    name: string;
    id: number;
    players: RunDataPlayer[];
}
interface RunDataPlayer {
    name: string;
    id: number;
    teamID: number;
    country: string;
    social: {
        twitch: string;
    };
}
declare class SpeedcontrolUtil {
    nodecgContext: NodeCG;
    runDataArray: Replicant<RunData[]>;
    constructor(nodecg: NodeCG);
    /**
     * Gets the next X runs in the schedule after the supplied run.
     * @param run Run data object.
     * @param amount Maximum amount of runs to return.
     */
    getNextRuns(run: RunData, amount: number): RunData[];
    /**
     * Find run data array index of current run based on it's ID.
     * @param run Run data object.
     */
    findIndexInRunDataArray(run?: RunData): number;
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
