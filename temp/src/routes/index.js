"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Paths_1 = __importDefault(require("../common/Paths"));
const CardRoutes_1 = __importDefault(require("./CardRoutes"));
const apiRouter = (0, express_1.Router)();
const cardRouter = (0, express_1.Router)();
cardRouter.post(Paths_1.default.Cards.GetAllArchenemyCards, CardRoutes_1.default.getAllArchenemyCards);
apiRouter.use(Paths_1.default.Cards.Base, cardRouter);
exports.default = apiRouter;
