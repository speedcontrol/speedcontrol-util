import clone from 'clone';
import { EventEmitter } from 'events';
import { TimerChangesDisabled } from 'nodecg-speedcontrol/schemas';
import { RunData, RunDataActiveRun, RunDataArray, Timer } from 'nodecg-speedcontrol/types';
import { NodeCG, Replicant } from 'nodecg/types/server';
const sc = 'nodecg-speedcontrol';

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

class SpeedcontrolUtil extends EventEmitter {
  private nodecgContext: NodeCG;
  readonly runDataArray: Replicant<RunDataArray>;
  readonly runDataActiveRun: Replicant<RunDataActiveRun>;
  readonly timer: Replicant<Timer>;
  timerChangesDisabled: Replicant<TimerChangesDisabled>;

  constructor(nodecg: NodeCG) {
    super();
    this.nodecgContext = nodecg;
    this.runDataArray = nodecg.Replicant<RunDataArray>('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant<RunDataActiveRun>('runDataActiveRun', sc);
    this.timer = nodecg.Replicant<Timer>('timer', sc);
    this.timerChangesDisabled = nodecg.Replicant<TimerChangesDisabled>('timerChangesDisabled', sc);

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
          this.emit('timerFinished');
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
        const validEditStates = ['paused', 'stopped'];
        if (validEditStates.includes(newState) && oldState === newState
        && operation.path === '/' && operation.method === 'update'
        // @ts-ignore: args not properly defined in typings.
        && operation.args.prop === 'milliseconds') {
          this.emit('timerEdited');
        }
        // When teams finish/undo their finish.
        if (operation.path === '/teamFinishTimes') {
          // @ts-ignore: args not properly defined in typings.
          const teamID = Number(operation.args.prop);
          if (operation.method === 'add') { // Team finished.
            this.emit('timerTeamFinished', teamID);
          } else if (operation.method === 'delete') { // Team undo finish.
            this.emit('timerTeamUndidFinish', teamID);
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
   * Gets the next X runs in the schedule after the supplied run.
   * @param amount Maximum amount of runs to return, defaults to 4.
   * @param run Run data object, defaults to current run. Will grab from the start if not set.
   */
  getNextRuns(amount: number = 4, run: RunData | null = this.getCurrentRun()): RunData[] {
    const nextRuns: RunData[] = [];
    const indexOfCurrentRun = this.findIndexInRunDataArray(run);
    for (let i = 1; i <= amount; i = i + 1) {
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
    let indexOfRun = -1;

    // Completely skips this if the run variable isn't defined.
    if (run) {
      for (let i = 0; i < this.getRunDataArray().length; i = i + 1) {
        if (run.id === this.getRunDataArray()[i].id) {
          indexOfRun = i;
          break;
        }
      }
    }

    return indexOfRun;
  }

  /**
   * Gets the total amount of players in a specified run.
   * @param run Run data object.
   */
  checkForTotalPlayers(run: RunData): number {
    let amount = 0;
    run.teams.forEach(team => team.players.forEach(() => amount += 1));
    return amount;
  }

  /**
   * Goes through each team and players and makes a string to show the names correctly together.
   * @param run Run data object.
   */
  formPlayerNamesString(run: RunData): string {
    const namesArray: string[] = [];
    let namesList = 'No Player(s)';
    run.teams.forEach((team) => {
      const teamPlayerArray: string[] = [];
      team.players.forEach(player => teamPlayerArray.push(player.name));
      namesArray.push(teamPlayerArray.join(', '));
    });
    if (namesList.length) {
      namesList = namesArray.join(' vs. ');
    }
    return namesList;
  }

  /**
   * Starts the nodecg-speedcontrol timer.
   */
  startTimer(): void {
    // @ts-ignore: NodeCG not declaring this (yet).
    this.nodecgContext.sendMessageToBundle('startTimer', sc);
  }

  /**
   * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
   * @param teamID Team to stop the timer for; 1st team if none specified.
   */
  stopTimer(teamID: number = 0): void {
    // @ts-ignore: NodeCG not declaring this (yet).
    this.nodecgContext.sendMessageToBundle('stopTimer', sc, teamID);
  }

  /**
   * Resets the nodecg-speedcontrol timer.
   */
  resetTimer(): void {
    // @ts-ignore: NodeCG not declaring this (yet).
    this.nodecgContext.sendMessageToBundle('resetTimer', sc);
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
