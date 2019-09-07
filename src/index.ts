import clone from 'clone';
import { EventEmitter } from 'events';
import { RunDataActiveRunSurrounding, TimerChangesDisabled } from 'nodecg-speedcontrol/schemas';
import { ExtensionReturn, RunData, RunDataActiveRun, RunDataArray, SendMessage, Timer } from 'nodecg-speedcontrol/types'; // eslint-disable-line
import { NodeCG, Replicant } from 'nodecg/types/server';

const sc = 'nodecg-speedcontrol';

interface SpeedcontrolUtil {
  on(event: 'timerStarted', listener: () => void): this;
  on(event: 'timerResumed', listener: () => void): this;
  on(event: 'timerPaused', listener: () => void): this;
  on(event: 'timerStopped', listener: () => void): this;
  on(event: 'timerReset', listener: () => void): this;
  on(event: 'timerEdited', listener: () => void): this;
  on(event: 'timerTeamStopped', listener: (id: string) => void): this;
  on(event: 'timerTeamStopUndone', listener: (id: string) => void): this;

  on(event: string, listener: Function): this;
}

class SpeedcontrolUtil extends EventEmitter {
  /* eslint-disable lines-between-class-members */
  private nodecg: NodeCG;
  readonly runDataArray: Replicant<RunDataArray>;
  readonly runDataActiveRun: Replicant<RunDataActiveRun>;
  readonly runDataActiveRunSurrounding: Replicant<RunDataActiveRunSurrounding>
  readonly timer: Replicant<Timer>;
  sendMessage: SendMessage;
  timerChangesDisabled: Replicant<TimerChangesDisabled>;
  /* eslint-enable lines-between-class-members */

  constructor(nodecg: NodeCG) {
    super();
    this.nodecg = nodecg;
    this.runDataArray = nodecg.Replicant('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
    this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
    this.timer = nodecg.Replicant('timer', sc);
    this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
    this.sendMessage = (nodecg.extensions[sc] as unknown as ExtensionReturn).sendMessage;

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

  /**
   * Gets the next X runs in the schedule after the supplied run,
   * or after the currently active run if possible.
   * @param amount Maximum amount of runs to return, defaults to 4.
   * @param run Run data object, will return runs after this one if supplied.
   */
  getNextRuns(amount = 4, run?: RunData | null): RunData[] {
    let runIndex = this.findRunIndex(run || this.runDataActiveRunSurrounding.value.next);
    runIndex = (run) ? runIndex += 1 : runIndex;
    return this.getRunDataArray().slice(runIndex, runIndex + amount);
  }

  /**
   * Attempt to find a run in the run data array from it's ID.
   * Will return -1 if it cannot be found.
   * @param arg Can either be a run data object or a unique ID string.
   */
  findRunIndex(arg?: RunData | string | null): number {
    let runId = arg as string;
    if (arg && typeof arg !== 'string') {
      runId = arg.id;
    }
    return this.getRunDataArray().findIndex((run) => run.id === runId);
  }

  /**
   * Gets the total amount of players in a specified run.
   * @param run Run data object.
   */
  static getRunTotalPlayers(run: RunData): number {
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

  /**
   * Starts the nodecg-speedcontrol timer.
   */
  startTimer(): void {
    this.sendMessage('timerStart').catch(() => {});
  }

  /**
   * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
   * @param teamIndex Index of team to stop the timer for; 1st team if none specified.
   */
  stopTimer(teamIndex = 0): void {
    const run = this.getCurrentRun();
    let uuid;
    if (run && run.teams[teamIndex]) {
      uuid = run.teams[teamIndex].id;
    }
    if (run && !uuid) {
      return;
    }
    this.sendMessage('timerStop', uuid).catch(() => {});
  }

  /**
   * Resets the nodecg-speedcontrol timer.
   */
  resetTimer(): void {
    this.sendMessage('timerReset').catch(() => {});
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
