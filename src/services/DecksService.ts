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

async function saveArchenemyDeck({
  deck,
  userId,
}: {
  deck: { name: string; description?: string; cardIds: string[] };
  userId: number;
}) {
  return await prisma.archenemyDeck
    .create({
      data: {
        name: deck.name,
        description: deck.description,
        userId,
        deckCards: {
          createMany: {
            data: deck.cardIds.map((cardId) => ({
              cardId,
            })),
          },
        },
      },
    })
    .then((newDeck) => newDeck)
    .catch((e: unknown) => {
      console.log("error while creating archenemy deck", e);
    });
}

export { getAllDecks, saveArchenemyDeck };
