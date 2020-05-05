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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@yellow-snow/http");
var PingController = /** @class */ (function (_super) {
    __extends(PingController, _super);
    function PingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PingController.prototype.ping = function () {
        try {
            this.res.send('Hello from the ping controller');
        }
        catch (e) {
            throw e;
        }
    };
    return PingController;
}(http_1.HttpController));
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map