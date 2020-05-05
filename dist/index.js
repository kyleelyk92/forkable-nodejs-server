"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("@yellow-snow/http");
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.set('trust proxy', true);
var port = 3000;
var router = new http_1.HttpRouter(routes_1.routes);
router.init(app);
app.listen(port, function () { return console.log("Server running and listening on port: " + port); });
//# sourceMappingURL=index.js.map