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

class SpeedcontrolUtil extends EventEmitter {
  /**
   * Takes a run data object and returns a formed string of the player names.
   * @param runData Run Data object.
   */
  static formPlayerNamesStr(runData: RunData): string {
    return runData.teams.map((team) => (
      team.players.map((player) => player.name).join(', ')
    )).join(' vs. ') || 'N/A';
  }

  /**
   * Gets the total amount of players in a specified run.
   * @param runData Run data object.
   */
  static getRunTotalPlayers(runData: RunData): number {
    return runData.teams.reduce((acc, team) => (
      acc + team.players.reduce((acc_) => acc_ + 1, 0)
    ), 0);
  }
}

export = SpeedcontrolUtil;
