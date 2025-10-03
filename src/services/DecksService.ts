import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

/**
 * Get all archenemy cards
 */
async function getAllDecks() {
  // TODO: error handling
  return await prisma.archenemyDeck
    .findMany({
      include: {
        deckCards: {
          include: {
            card: true,
          },
        },
      },
    })
    .then((decks) =>
      decks.map((deck) => ({
        ...deck,
        deckCards: deck.deckCards.map((deckCard) => deckCard.card),
      }))
    )
    .catch((e: unknown) => {
      console.log("error while fetching archenemy cards", e);
    });
}

export { getAllDecks };
