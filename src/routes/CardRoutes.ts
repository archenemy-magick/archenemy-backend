import HttpStatusCodes from "@src/common/HttpStatusCodes";

import { IReq, IRes } from "./common";
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
 * Get all archenemy cards
 */
async function getAllArchenemyCards(_: IReq, res: IRes) {
  // TODO: error handling
  const scryfallRes = await instance.get("/cards/search?q=t:scheme");

  res.status(HttpStatusCodes.OK).json(scryfallRes.data).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  getAllArchenemyCards,
} as const;
