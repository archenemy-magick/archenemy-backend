import HttpStatusCodes from "@src/common/HttpStatusCodes";
import { z } from "zod";

import { IReq, IRes } from "./common";
import {
  getAllArchenemyCards,
  getAllDecks,
  saveArchenemyDeck,
} from "../services";

const CreateDeckSchema = z.object({
  deck: z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    cardIds: z.array(z.string()).min(1).max(102),
    isPublic: z.boolean().optional(),
  }),
});

type CreateDeckBody = z.infer<typeof CreateDeckSchema>;

// TODO: probably remove this route once we have user auth
/**
 * Get all archenemy cards
 */
async function fetchAllDecks(_: IReq<unknown>, res: IRes) {
  // TODO: error handling
  const allDecks = await getAllDecks();
  res.status(HttpStatusCodes.OK).json(allDecks).end();
}

async function createDeck(req: IReq<CreateDeckBody>, res: IRes) {
  console.log("Received request to create deck:", req.body.deck);

  // TODO: error handling
  const userId = 1; // Replace with actual user ID
  const deck = req.body.deck;
  if (!deck?.name || !deck.cardIds || !Array.isArray(deck.cardIds)) {
    res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ error: "Invalid deck data" })
      .end();
    return;
  }

  const newDeck = await saveArchenemyDeck({
    deck,
    userId,
  });
  res.status(HttpStatusCodes.CREATED).json(newDeck).end();
}

export default {
  fetchAllDecks,
  createDeck,
} as const;
