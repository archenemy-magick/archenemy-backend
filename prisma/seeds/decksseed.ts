import { PrismaClient } from "@prisma/client";
import rawArchenemyCards from "./rawArchenemyCards.json";

const prisma = new PrismaClient();

async function main() {
  // Get the first 10 card IDs
  const firstTenCardIds = rawArchenemyCards.slice(0, 10).map((card) => card.id);

  // Create deck with cards using nested create
  await prisma.archenemyDeck.create({
    data: {
      name: "Super Badass Archenemy Deck",
      description: "The baddest archenemy deck in the multiverse",
      isPublic: true,
      isArchived: false,
      userId: 1,
      deckCards: {
        create: firstTenCardIds.map((cardId) => ({
          card: {
            connect: { id: cardId },
          },
        })),
      },
    },
  });
}

export default main;
