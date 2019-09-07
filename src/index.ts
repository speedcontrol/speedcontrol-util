import clone from 'clone';
import { EventEmitter } from 'events';
import { TimerChangesDisabled } from 'nodecg-speedcontrol/schemas';
import { RunData, RunDataActiveRun, RunDataArray, Timer } from 'nodecg-speedcontrol/types'; // eslint-disable-line
import { NodeCG, Replicant } from 'nodecg/types/server';

const sc = 'nodecg-speedcontrol';

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

class SpeedcontrolUtil extends EventEmitter {
  /* eslint-disable lines-between-class-members */
  private nodecg: NodeCG;
  readonly runDataArray: Replicant<RunDataArray>;
  readonly runDataActiveRun: Replicant<RunDataActiveRun>;
  readonly timer: Replicant<Timer>;
  timerChangesDisabled: Replicant<TimerChangesDisabled>;
  /* eslint-enable lines-between-class-members */

  constructor(nodecg: NodeCG) {
    super();
    this.nodecg = nodecg;
    this.runDataArray = nodecg.Replicant('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
    this.timer = nodecg.Replicant('timer', sc);
    this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);

    // Emit events when the timer state changes.
    this.timer.on('change', (newVal, oldVal, opQ) => {
      if (!oldVal) {
        return;
      }
      const oldState = oldVal.state;
      const newState = newVal.state;
      if (oldState !== newState) {
        if (newState === 'running') {
          if (oldState === 'paused') {
            this.emit('timerResumed');
          } else if (oldState === 'stopped') {
            this.emit('timerStarted');
          }
        } else if (newState === 'finished') {
          this.emit('timerStopped');
        } else if (newState === 'paused') {
          this.emit('timerPaused');
        } else if (newState === 'stopped') {
          this.emit('timerReset');
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
          this.emit('timerEdited');
        }
        // When teams stop/undo.
        if (operation.path === '/teamFinishTimes') {
          // @ts-ignore: args not properly defined in typings.
          const teamID = operation.args.prop as string;
          if (operation.method === 'add') {
            this.emit('timerTeamStopped', teamID);
          } else if (operation.method === 'delete') {
            this.emit('timerTeamStopUndone', teamID);
          }
        }
      });
    });
  }

  /**
   * Returns the currently active run data object.
   */
  getCurrentRun(): RunDataActiveRun {
    return clone(this.runDataActiveRun.value);
  }

  /**
   * Returns the array of runs.
   */
  getRunDataArray(): RunDataArray {
    return clone(this.runDataArray.value);
  }

  // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
  /**
   * Gets the next X runs in the schedule after the supplied run.
   * @param amount Maximum amount of runs to return, defaults to 4.
   * @param run Run data object, defaults to current run. Will grab from the start if not set.
   */
  getNextRuns(amount = 4, run: RunData | null = this.getCurrentRun()): RunData[] {
    const nextRuns: RunData[] = [];
    const indexOfCurrentRun = this.findIndexInRunDataArray(run);
    for (let i = 1; i <= amount; i += 1) {
      if (!this.getRunDataArray()[indexOfCurrentRun + i]) {
        break;
      }
      nextRuns.push(clone(this.getRunDataArray()[indexOfCurrentRun + i]));
    }
    return nextRuns;
  }

  /**
   * Find run data array index of current run based on it's ID.
   * Will return -1 if it cannot be found.
   * @param run Run data object, defaults to current run.
   */
  findIndexInRunDataArray(run: RunData | null = this.getCurrentRun()): number {
    // Completely skips this if the run variable isn't defined.
    if (!run) {
      return -1;
    }
    return this.getRunDataArray().findIndex((arrRun) => run.id === arrRun.id);
  }

  /**
   * Gets the total amount of players in a specified run.
   * @param run Run data object.
   */
  static checkForTotalPlayers(run: RunData): number {
    return run.teams.reduce((acc, team) => (
      acc + team.players.reduce((acc_) => acc_ + 1, 0)
    ), 0);
  }

  /**
   * Goes through each team and players and makes a string to show the names correctly together.
   * @param run Run data object.
   */
  static formPlayerNamesStr(run: RunData): string {
    return run.teams.map((team): string => (
      team.players.map((player): string => player.name).join(', ')
    )).join(' vs. ') || 'No Player(s)';
  }

  // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
  /**
   * Starts the nodecg-speedcontrol timer.
   */
  startTimer(): void {
    this.nodecg.sendMessageToBundle('startTimer', sc);
  }

  // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
  /**
   * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
   * @param teamID Team to stop the timer for; 1st team if none specified.
   */
  stopTimer(teamID = 0): void {
    this.nodecg.sendMessageToBundle('stopTimer', sc, teamID);
  }

  // TBD: REDO BASED ON NEW SPEEDCONTROL LOGIC
  /**
   * Resets the nodecg-speedcontrol timer.
   */
  resetTimer(): void {
    this.nodecg.sendMessageToBundle('resetTimer', sc);
  }

  /**
   * Prevent the nodecg-speedcontrol timer from being changed.
   */
  disableTimerChanges(): void {
    this.timerChangesDisabled.value = true;
  }

  /**
   * Allow the nodecg-speedcontrol timer to be changed.
   */
  enableTimerChanges(): void {
    this.timerChangesDisabled.value = false;
  }
}

export = SpeedcontrolUtil;
