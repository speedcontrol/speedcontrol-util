"use strict";
var SpeedcontrolUtil = /** @class */ (function () {
    function SpeedcontrolUtil(nodecg) {
        this.nodecgContext = nodecg;
        this.runDataArray = nodecg.Replicant('runDataArray', 'nodecg-speedcontrol');
        this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol');
        this.timer = nodecg.Replicant('timer', 'nodecg-speedcontrol');
    }
    /**
     * Gets the next X runs in the schedule after the supplied run.
     * @param run Run data object.
     * @param amount Maximum amount of runs to return.
     */
    SpeedcontrolUtil.prototype.getNextRuns = function (run, amount) {
        var nextRuns = [];
        var indexOfCurrentRun = this.findIndexInRunDataArray(run);
        for (var i = 1; i <= amount; i = i + 1) {
            if (!this.runDataArray.value[indexOfCurrentRun + i]) {
                break;
            }
            nextRuns.push(this.runDataArray.value[indexOfCurrentRun + i]);
        }
        return nextRuns;
    };
    /**
     * Find run data array index of current run based on it's ID.
     * @param run Run data object.
     */
    SpeedcontrolUtil.prototype.findIndexInRunDataArray = function (run) {
        var indexOfRun = -1;
        // Completely skips this if the run variable isn't defined.
        if (run) {
            for (var i = 0; i < this.runDataArray.value.length; i = i + 1) {
                if (run.id === this.runDataArray.value[i].id) {
                    indexOfRun = i;
                    break;
                }
            }
        }
        return indexOfRun;
    };
    /**
     * Gets the total amount of players in a specified run.
     * @param run Run data object.
     */
    SpeedcontrolUtil.prototype.checkForTotalPlayers = function (run) {
        var amount = 0;
        run.teams.forEach(function (team) { return team.players.forEach(function () { return amount = amount + 1; }); });
        return amount;
    };
    /**
     * Goes through each team and players and makes a string to show the names correctly together.
     * @param run Run data object.
     */
    SpeedcontrolUtil.prototype.formPlayerNamesString = function (run) {
        var namesArray = [];
        var namesList = 'No Player(s)';
        run.teams.forEach(function (team) {
            var teamPlayerArray = [];
            team.players.forEach(function (player) { return teamPlayerArray.push(player.name); });
            namesArray.push(teamPlayerArray.join(', '));
        });
        if (namesList.length) {
            namesList = namesArray.join(' vs. ');
        }
        return namesList;
    };
    return SpeedcontrolUtil;
}());
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map