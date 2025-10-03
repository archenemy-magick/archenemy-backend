import HttpStatusCodes from "@src/common/HttpStatusCodes";

import { IReq, IRes } from "./common";
import { getAllArchenemyCards, getAllDecks } from "../services";

/**
 * Get all archenemy cards
 */
async function fetchAllDecks(_: IReq, res: IRes) {
  // TODO: error handling
  const allDecks = await getAllDecks();
  res.status(HttpStatusCodes.OK).json(allDecks).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  fetchAllDecks,
} as const;
