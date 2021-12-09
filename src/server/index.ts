import clone from 'clone';
import { NodeCGServer } from '../../types/nodecg/lib/nodecg-instance';
import { ReplicantServer } from '../../types/nodecg/lib/replicant';
import { CommercialDuration, ExtensionReturn, ListenFor, RunData, RunDataActiveRun, RunDataArray, RunFinishTimes, SendMessage, SendMessageReturnMap, Timer } from '../../types/speedcontrol';
import { RunDataActiveRunSurrounding, TimerChangesDisabled, TwitchCommercialTimer } from '../../types/speedcontrol/schemas';
import SpeedcontrolUtilShared, { onTimerChange } from '../shared';

const sc = 'nodecg-speedcontrol';

class SpeedcontrolUtil extends SpeedcontrolUtilShared {
  readonly runDataArray: ReplicantServer<RunDataArray>;
  readonly runDataActiveRun: ReplicantServer<RunDataActiveRun>;
  readonly runDataActiveRunSurrounding: ReplicantServer<RunDataActiveRunSurrounding>;
  readonly timer: ReplicantServer<Timer>;
  readonly runFinishTimes: ReplicantServer<RunFinishTimes>;
  readonly twitchCommercialTimer: ReplicantServer<TwitchCommercialTimer>;
  timerChangesDisabled: ReplicantServer<TimerChangesDisabled>;
  sendMessage: SendMessage;
  listenFor: ListenFor;

  constructor(nodecg: NodeCGServer) {
    super();
    this.runDataArray = nodecg.Replicant('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
    this.runDataActiveRunSurrounding = nodecg.Replicant('runDataActiveRunSurrounding', sc);
    this.timer = nodecg.Replicant('timer', sc);
    this.runFinishTimes = nodecg.Replicant('runFinishTimes', sc);
    this.twitchCommercialTimer = nodecg.Replicant('twitchCommercialTimer', sc);
    this.timerChangesDisabled = nodecg.Replicant('timerChangesDisabled', sc);
    this.sendMessage = (nodecg.extensions[sc] as unknown as ExtensionReturn).sendMessage;
    this.listenFor = (nodecg.extensions[sc] as unknown as ExtensionReturn).listenFor;

    // Emit events when the timer state changes.
    this.timer.on('change', (newVal, oldVal, opQ) => {
      onTimerChange(this, newVal, oldVal, opQ);
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
    return this.sendMessage('timerStart');
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
    return this.sendMessage('timerStop', { id: uuid });
  }

  /**
   * Resets the nodecg-speedcontrol timer.
   */
  async resetTimer(): Promise<void> {
    return this.sendMessage('timerReset');
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
  async startTwitchCommercial(duration?: CommercialDuration):
  Promise<SendMessageReturnMap['twitchStartCommercial']> {
    return this.sendMessage('twitchStartCommercial', { duration });
  }
}

export = SpeedcontrolUtil;
