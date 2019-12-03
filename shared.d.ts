/// <reference types="node" />
import { EventEmitter } from 'events';
import { RunData } from 'nodecg-speedcontrol/types';
interface SpeedcontrolUtil {
    on(event: 'timerStarted', listener: () => void): this;
    on(event: 'timerResumed', listener: () => void): this;
    on(event: 'timerPaused', listener: () => void): this;
    on(event: 'timerStopped', listener: () => void): this;
    on(event: 'timerReset', listener: () => void): this;
    on(event: 'timerEdited', listener: () => void): this;
    on(event: 'timerTeamStopped', listener: (id: string, forfeit: boolean) => void): this;
    on(event: 'timerTeamUndone', listener: (id: string, forfeit: boolean) => void): this;
    on(event: string, listener: Function): this;
}
declare class SpeedcontrolUtil extends EventEmitter {
    /**
     * Takes a run data object and returns a formed string of the player names.
     * @param runData Run Data object.
     */
    static formPlayerNamesStr(runData: RunData): string;
    /**
     * Gets the total amount of players in a specified run.
     * @param runData Run data object.
     */
    static getRunTotalPlayers(runData: RunData): number;
}
export = SpeedcontrolUtil;
