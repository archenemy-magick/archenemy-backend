import HttpStatusCodes from "@src/common/HttpStatusCodes";

import { IReq, IRes } from "./common";
import { getAllArchenemyCards } from "../services";

/**
 * Get all archenemy cards
 */
async function fetchAllArchenemyCards(_: IReq, res: IRes) {
  // TODO: error handling
  const scryfallCards = await getAllArchenemyCards();
  res.status(HttpStatusCodes.OK).json(scryfallCards).end();
}

/******************************************************************************
                                Export default
******************************************************************************/

export default {
  fetchAllArchenemyCards,
} as const;
