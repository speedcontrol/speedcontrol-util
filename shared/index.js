"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var events_1 = require("events");
var SpeedcontrolUtil = /** @class */ (function (_super) {
    __extends(SpeedcontrolUtil, _super);
    function SpeedcontrolUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Takes a run data object and returns a formed string of the player names.
     * @param runData Run Data object.
     */
    SpeedcontrolUtil.formPlayerNamesStr = function (runData) {
        return runData.teams.map(function (team) { return (team.players.map(function (player) { return player.name; }).join(', ')); }).join(' vs. ') || 'N/A';
    };
    /**
     * Gets the total amount of players in a specified run.
     * @param runData Run data object.
     */
    SpeedcontrolUtil.getRunTotalPlayers = function (runData) {
        return runData.teams.reduce(function (acc, team) { return (acc + team.players.reduce(function (acc_) { return acc_ + 1; }, 0)); }, 0);
    };
    return SpeedcontrolUtil;
}(events_1.EventEmitter));
module.exports = SpeedcontrolUtil;
//# sourceMappingURL=index.js.map