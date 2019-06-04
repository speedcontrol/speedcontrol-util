import { RunData, RunDataActiveRun, RunDataArray, Timer } from 'nodecg-speedcontrol/types';
import { NodeCG, Replicant } from 'nodecg/types/server';
const sc = 'nodecg-speedcontrol';

class SpeedcontrolUtil {
  private nodecgContext: NodeCG;
  readonly runDataArray: Replicant<RunDataArray>;
  readonly runDataActiveRun: Replicant<RunDataActiveRun>;
  readonly timer: Replicant<Timer>;

  constructor(nodecg: NodeCG) {
    this.nodecgContext = nodecg;
    this.runDataArray = nodecg.Replicant<RunDataArray>('runDataArray', sc);
    this.runDataActiveRun = nodecg.Replicant<RunDataActiveRun>('runDataActiveRun', sc);
    this.timer = nodecg.Replicant<Timer>('timer', sc);
  }

  /**
   * Returns the currently active run data object.
   */
  getCurrentRun(): RunDataActiveRun {
    return this.runDataActiveRun.value;
  }

  /**
   * Returns the array of runs.
   */
  getRunDataArray(): RunDataArray {
    return this.runDataArray.value;
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
      nextRuns.push(this.getRunDataArray()[indexOfCurrentRun + i]);
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
    run.teams.forEach(team => team.players.forEach(() => amount = amount + 1));
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
}

export = SpeedcontrolUtil;
