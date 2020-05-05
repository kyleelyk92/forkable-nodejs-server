"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@yellow-snow/http");
var controllers_1 = require("./controllers");
exports.routes = [
    new http_1.HttpRoute('/', 'get', controllers_1.PingController, 'ping'),
];
//# sourceMappingURL=routes.js.map