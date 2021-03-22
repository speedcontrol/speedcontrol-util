"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedcontrolUtilBrowser = exports.SpeedcontrolUtilServer = exports.SpeedcontrolUtil = void 0;
var browser_1 = __importDefault(require("./browser"));
var server_1 = __importDefault(require("./server"));
exports.default = server_1.default;
exports.SpeedcontrolUtil = server_1.default;
exports.SpeedcontrolUtilServer = server_1.default;
exports.SpeedcontrolUtilBrowser = browser_1.default;
//# sourceMappingURL=index.js.map