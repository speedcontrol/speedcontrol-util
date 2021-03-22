import { EventEmitter } from 'events';
import { RunData, Timer } from '../../types';
import { OperationQueueItem } from '../../types/nodecg/lib/replicant';

interface SpeedcontrolUtil {
  on(event: 'timerStarted', listener: () => void): this;
  on(event: 'timerResumed', listener: () => void): this;
  on(event: 'timerPaused', listener: () => void): this;
  on(event: 'timerStopped', listener: () => void): this;
  on(event: 'timerReset', listener: () => void): this;
  on(event: 'timerEdited', listener: () => void): this;
  on(event: 'timerTeamStopped', listener: (id: string, forfeit: boolean) => void): this;
  on(event: 'timerTeamUndone', listener: (id: string, forfeit: boolean) => void): this;
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

// Emit events when the timer state changes.
export function onTimerChange(
  { emit }: EventEmitter,
  newVal: Timer,
  oldVal?: Timer,
  opQ?: OperationQueueItem[],
): void {
  if (!oldVal) {
    return;
  }
  const oldState = oldVal.state;
  const newState = newVal.state;
  if (oldState !== newState) {
    if (newState === 'running') {
      if (oldState === 'paused') {
        emit('timerResumed');
      } else if (oldState === 'stopped') {
        emit('timerStarted');
      }
    } else if (newState === 'finished') {
      emit('timerStopped');
    } else if (newState === 'paused') {
      emit('timerPaused');
    } else if (newState === 'stopped') {
      emit('timerReset');
    }
  }

  if (!opQ) {
    return;
  }
  opQ.forEach((operation) => {
    // If timer is paused/stopped and the time changes, it was edited somehow.
    if (['paused', 'stopped'].includes(newState) && oldState === newState
    && operation.path === '/' && operation.method === 'update'
    // @ts-ignore: args not properly defined in typings.
    && operation.args.prop === 'milliseconds') {
      emit('timerEdited');
    }
    // When teams stop/undo.
    if (operation.path === '/teamFinishTimes') {
      // @ts-ignore: args not properly defined in typings.
      const teamID = operation.args.prop as string;
      const time = newVal.teamFinishTimes[teamID];
      if (operation.method === 'add') {
        emit('timerTeamStopped', teamID, time.state === 'forfeit');
      } else if (operation.method === 'delete') {
        emit('timerTeamUndone', teamID);
      }
    }
  });
}

export default SpeedcontrolUtil;
