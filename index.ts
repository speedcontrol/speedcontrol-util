import { NodeCG, Replicant } from 'nodecg/types/server';

interface RunData {
  game?: string;
  gameTwitch?: string;
  system?: string;
  region?: string;
  release?: string;
  category?: string;
  estimate?: string;
  estimateS?: number;
  setupTime?: string;
  setupTimeS?: number;
  scheduled?: string;
  scheduledS?: number;
  teams: RunDataTeams[];
  customData: {
    [key: string]: string;
  };
  id: number;
}

interface RunDataTeams {
  name?: string;
  id: number;
  players: RunDataPlayer[];
}

interface RunDataPlayer {
  name: string;
  id: number;
  teamID: number;
  country?: string;
  social: {
    twitch?: string;
  };
}

interface TimerBasic {
  time: string;
  state: string;
  milliseconds: number;
  timestamp: number;
}

interface Timer extends TimerBasic {
  teamFinishTimes: {
    [id: number]: TimerBasic;
  };
}

class SpeedcontrolUtil {
  private nodecgContext: NodeCG;
  runDataArray: Replicant<RunData[]>;
  runDataActiveRun: Replicant<RunData | undefined>;
  timer: Replicant<Timer>;

  constructor(nodecg: NodeCG) {
    this.nodecgContext = nodecg;
    this.runDataArray = nodecg.Replicant<RunData[]>('runDataArray', 'nodecg-speedcontrol');
    this.runDataActiveRun = nodecg.Replicant<RunData>('runDataActiveRun', 'nodecg-speedcontrol');
    this.timer = nodecg.Replicant<Timer>('timer', 'nodecg-speedcontrol');
  }

  /**
   * Gets the next X runs in the schedule after the supplied run.
   * @param run Run data object.
   * @param amount Maximum amount of runs to return.
   */
  getNextRuns(run: RunData, amount: number): RunData[] {
    const nextRuns: RunData[] = [];
    const indexOfCurrentRun = this.findIndexInRunDataArray(run);
    for (let i = 1; i <= amount; i = i + 1) {
      if (!this.runDataArray.value[indexOfCurrentRun + i]) {
        break;
      }
      nextRuns.push(this.runDataArray.value[indexOfCurrentRun + i]);
    }
    return nextRuns;
  }

  /**
   * Find run data array index of current run based on it's ID.
   * @param run Run data object.
   */
  findIndexInRunDataArray(run?: RunData): number {
    let indexOfRun = -1;

    // Completely skips this if the run variable isn't defined.
    if (run) {
      for (let i = 0; i < this.runDataArray.value.length; i = i + 1) {
        if (run.id === this.runDataArray.value[i].id) {
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
}

export = SpeedcontrolUtil;
