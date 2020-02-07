import clone from 'clone';
import { RunDataActiveRunSurrounding, TimerChangesDisabled, TwitchCommercialTimer } from 'nodecg-speedcontrol/schemas'; // eslint-disable-line max-len
import { RunData, RunDataActiveRun, RunDataArray, RunFinishTimes, SendMessageReturnMap, Timer } from 'nodecg-speedcontrol/types'; // eslint-disable-line object-curly-newline, max-len
import { NodeCGBrowser } from 'nodecg/types/lib/nodecg-instance';
import { ReplicantBrowser } from 'nodecg/types/lib/replicant';
import SpeedcontrolUtilShared from './shared';

const sc = 'nodecg-speedcontrol';

class SpeedcontrolUtil extends SpeedcontrolUtilShared {
  readonly runDataArray: ReplicantBrowser<RunDataArray>;
  readonly runDataActiveRun: ReplicantBrowser<RunDataActiveRun>;
  readonly runDataActiveRunSurrounding: ReplicantBrowser<RunDataActiveRunSurrounding>
  readonly timer: ReplicantBrowser<Timer>;
  readonly runFinishTimes: ReplicantBrowser<RunFinishTimes>;
  readonly twitchCommercialTimer: ReplicantBrowser<TwitchCommercialTimer>;
  timerChangesDisabled: ReplicantBrowser<TimerChangesDisabled>;
  readonly nodecg: NodeCGBrowser;

  constructor(nodecg: NodeCGBrowser) {
    super();
    this.runDataArray = nodecg.Replicant('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
    this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
    this.timer = nodecg.Replicant('timer', sc);
    this.runFinishTimes = nodecg.Replicant('runFinishTimes', sc);
    this.twitchCommercialTimer = nodecg.Replicant('twitchCommercialTimer', sc);
    this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
    this.nodecg = nodecg;

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
          const time = newVal.teamFinishTimes[teamID];
          if (operation.method === 'add') {
            this.emit('timerTeamStopped', teamID, time.state === 'forfeit');
          } else if (operation.method === 'delete') {
            this.emit('timerTeamUndone', teamID);
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
    return clone(this.runDataArray.value || []);
  }

  /**
   * Gets the next X runs in the schedule after the supplied run,
   * or after the currently active run if possible.
   * @param amount Maximum amount of runs to return, defaults to 4.
   * @param run Run data object, will return runs after this one if supplied.
   */
  getNextRuns(amount = 4, run?: RunData | null): RunData[] {
    const nextRun = (this.runDataActiveRunSurrounding.value)
      ? this.runDataActiveRunSurrounding.value.next : undefined;
    let runIndex = this.findRunIndex(run || nextRun);
    runIndex = (run) ? runIndex += 1 : runIndex;
    return this.getRunDataArray().slice(runIndex, runIndex + amount);
  }

  /**
   * Attempt to find a run in the run data array from it's ID.
   * Will return -1 if it cannot be found.
   * @param arg Can either be a run data object or a unique ID string.
   */
  findRunIndex(arg?: RunData | string | null): number {
    let runId = arg;
    if (arg && typeof arg !== 'string') {
      runId = arg.id;
    }
    return this.getRunDataArray().findIndex((run) => run.id === runId);
  }

  /**
   * Starts the nodecg-speedcontrol timer.
   */
  async startTimer(): Promise<void> {
    await this.nodecg.sendMessageToBundle('timerStart', sc);
  }

  /**
   * Stops the nodecg-speedcontrol timer for the specified team index,
   * or the 1st team if none specified.
   * @param teamIndex Index of team to stop the timer for, defaults to 1st (0).
   */
  async stopTimer(teamIndex = 0): Promise<void> {
    const run = this.getCurrentRun();
    let uuid;
    if (run && run.teams[teamIndex]) {
      uuid = run.teams[teamIndex].id;
    }
    if (run && !uuid) {
      throw new Error(`Run is active but team with index ${teamIndex} unavailable`);
    }
    await this.nodecg.sendMessageToBundle('timerStop', sc, { id: uuid });
  }

  /**
   * Resets the nodecg-speedcontrol timer.
   */
  async resetTimer(): Promise<void> {
    await this.nodecg.sendMessageToBundle('timerReset', sc);
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

  /**
   * Attempts to start a Twitch commercial on the set channel in the bundle.
   */
  async startTwitchCommercial(): Promise<SendMessageReturnMap['twitchStartCommercial']> {
    return this.nodecg.sendMessageToBundle('twitchStartCommercial', sc);
  }
}

export = SpeedcontrolUtil;
