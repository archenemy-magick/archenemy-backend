import { isNumber } from "jet-validators";
import { transform } from "jet-validators/utils";

import HttpStatusCodes from "@src/common/HttpStatusCodes";
import User from "@src/models/User";

import { IReq, IRes, parseReq } from "./common";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.scryfall.com",
  headers: {
    // "User-Agent": "ArchenemySelector/0.1",
    Accept: "*/*",
  },
});

/******************************************************************************
                                Variables
******************************************************************************/

// const Validators = {
//   add: parseReq({ user: User.test }),
//   update: parseReq({ user: User.test }),
//   delete: parseReq({ id: transform(Number, isNumber) }),
// } as const;

/******************************************************************************
                                Functions
******************************************************************************/

/**
 * Get random card.
 */
async function getAllArchenemyCards(_: IReq, res: IRes) {
  // TODO: error handling
  const scryfallRes = await instance.get("/cards/search?q=t:scheme");
  console.log("cards", scryfallRes);

  res.status(HttpStatusCodes.OK).json(scryfallRes.data).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAllArchenemyCards,
} as const;
