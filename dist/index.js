"use strict";
var sc = 'nodecg-speedcontrol';
var SpeedcontrolUtil = /** @class */ (function () {
    function SpeedcontrolUtil(nodecg) {
        this.nodecgContext = nodecg;
        this.runDataArray = nodecg.Replicant('runDataArray', sc);
        this.runDataActiveRun = nodecg.Replicant('runDataActiveRun', sc);
        this.timer = nodecg.Replicant('timer', sc);
    }
    /**
     * Returns the currently active run data object.
     */
    SpeedcontrolUtil.prototype.getCurrentRun = function () {
        return this.runDataActiveRun.value;
    };
    /**
     * Returns the array of runs.
     */
    SpeedcontrolUtil.prototype.getRunDataArray = function () {
        return this.runDataArray.value;
    };
    /**
     * Gets the next X runs in the schedule after the supplied run.
     * @param amount Maximum amount of runs to return, defaults to 4.
     * @param run Run data object, defaults to current run. Will grab from the start if not set.
     */
    SpeedcontrolUtil.prototype.getNextRuns = function (amount, run) {
        if (amount === void 0) { amount = 4; }
        if (run === void 0) { run = this.getCurrentRun(); }
        var nextRuns = [];
        var indexOfCurrentRun = this.findIndexInRunDataArray(run);
        for (var i = 1; i <= amount; i = i + 1) {
            if (!this.getRunDataArray()[indexOfCurrentRun + i]) {
                break;
            }
            nextRuns.push(this.getRunDataArray()[indexOfCurrentRun + i]);
        }
        return nextRuns;
    };
    /**
     * Find run data array index of current run based on it's ID.
     * Will return -1 if it cannot be found.
     * @param run Run data object, defaults to current run.
     */
    SpeedcontrolUtil.prototype.findIndexInRunDataArray = function (run) {
        if (run === void 0) { run = this.getCurrentRun(); }
        var indexOfRun = -1;
        // Completely skips this if the run variable isn't defined.
        if (run) {
            for (var i = 0; i < this.getRunDataArray().length; i = i + 1) {
                if (run.id === this.getRunDataArray()[i].id) {
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
    /**
     * Starts the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.startTimer = function () {
        // @ts-ignore: NodeCG not declaring this (yet).
        this.nodecgContext.sendMessageToBundle('startTimer', sc);
    };
    /**
     * Stops the nodecg-speedcontrol timer for the specified team, or the 1st team if none specified.
     * @param teamID Team to stop the timer for; 1st team if none specified.
     */
    SpeedcontrolUtil.prototype.stopTimer = function (teamID) {
        if (teamID === void 0) { teamID = 0; }
        // @ts-ignore: NodeCG not declaring this (yet).
        this.nodecgContext.sendMessageToBundle('stopTimer', sc, teamID);
    };
    /**
     * Resets the nodecg-speedcontrol timer.
     */
    SpeedcontrolUtil.prototype.resetTimer = function () {
        // @ts-ignore: NodeCG not declaring this (yet).
        this.nodecgContext.sendMessageToBundle('resetTimer', sc);
    };
    return SpeedcontrolUtil;
}());
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map