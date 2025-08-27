"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatusCodes_1 = __importDefault(require("@src/common/HttpStatusCodes"));
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    baseURL: 'https://api.scryfall.com',
    headers: {
        Accept: '*/*',
    },
});
async function getAllArchenemyCards(_, res) {
    const scryfallRes = await instance.get('/cards/search?q=t:scheme');
    console.log('cards', scryfallRes);
    res.status(HttpStatusCodes_1.default.OK).json(scryfallRes.data).end();
}
exports.default = {
    getAllArchenemyCards,
};
