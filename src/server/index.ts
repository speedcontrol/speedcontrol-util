import NodeCGTypes from '@nodecg/types';
import clone from 'clone';
import { CommercialDuration, ExtensionReturn, ListenFor, RunData, RunDataActiveRun, RunDataArray, RunFinishTimes, SendMessage, SendMessageReturnMap, Timer } from '../../types';
import { RunDataActiveRunSurrounding, TimerChangesDisabled, TwitchCommercialTimer } from '../../types/schemas';
import SpeedcontrolUtilShared, { onTimerChange } from '../shared';

type RepType<T> = NodeCGTypes.ServerReplicantWithSchemaDefault<T>;
const sc = 'nodecg-speedcontrol';

class SpeedcontrolUtil extends SpeedcontrolUtilShared {
  readonly runDataArray: RepType<RunDataArray>;
  readonly runDataActiveRun: RepType<RunDataActiveRun>;
  readonly runDataActiveRunSurrounding: RepType<RunDataActiveRunSurrounding>;
  readonly timer: RepType<Timer>;
  readonly runFinishTimes: RepType<RunFinishTimes>;
  readonly twitchCommercialTimer: RepType<TwitchCommercialTimer>;
  timerChangesDisabled: RepType<TimerChangesDisabled>;
  sendMessage: SendMessage;
  listenFor: ListenFor;

  constructor(nodecg: NodeCGTypes.ServerAPI) {
    super();
    const repWrapper = <T>(name: string) => nodecg.Replicant(name, sc) as unknown as RepType<T>;
    this.runDataArray = repWrapper('runDataArray');
    this.runDataActiveRun = repWrapper('runDataActiveRun');
    this.runDataActiveRunSurrounding = repWrapper('runDataActiveRunSurrounding');
    this.timer = repWrapper('timer');
    this.runFinishTimes = repWrapper('runFinishTimes');
    this.twitchCommercialTimer = repWrapper('twitchCommercialTimer');
    this.timerChangesDisabled = repWrapper('timerChangesDisabled');
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
