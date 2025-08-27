"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const jet_logger_1 = __importDefault(require("jet-logger"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const routes_1 = __importDefault(require("@src/routes"));
const Paths_1 = __importDefault(require("@src/common/Paths"));
const ENV_1 = __importDefault(require("@src/common/ENV"));
const HttpStatusCodes_1 = __importDefault(require("@src/common/HttpStatusCodes"));
const route_errors_1 = require("@src/common/route-errors");
const constants_1 = require("@src/common/constants");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default({}));
if (ENV_1.default.NodeEnv === constants_1.NodeEnvs.Dev) {
    app.use((0, morgan_1.default)("dev"));
}
if (ENV_1.default.NodeEnv === constants_1.NodeEnvs.Production) {
    if (!process.env.DISABLE_HELMET) {
        app.use((0, helmet_1.default)());
    }
}
app.use(Paths_1.default.Base, routes_1.default);
app.use((err, _, res, next) => {
    if (ENV_1.default.NodeEnv !== constants_1.NodeEnvs.Test.valueOf()) {
        jet_logger_1.default.err(err, true);
    }
    let status = HttpStatusCodes_1.default.BAD_REQUEST;
    if (err instanceof route_errors_1.RouteError) {
        status = err.status;
        res.status(status).json({ error: err.message });
    }
    return next(err);
});
const viewsDir = path_1.default.join(__dirname, "views");
app.set("views", viewsDir);
const staticDir = path_1.default.join(__dirname, "public");
app.use(express_1.default.static(staticDir));
app.get("/", (_, res) => {
    return res.redirect("/users");
});
app.get("/users", (_, res) => {
    return res.sendFile("users.html", { root: viewsDir });
});
exports.default = app;
