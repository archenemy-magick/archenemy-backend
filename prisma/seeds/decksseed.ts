import { PrismaClient } from "@prisma/client";
import rawArchenemyCards from "./rawArchenemyCards.json";

const prisma = new PrismaClient();

async function main() {
  // Get the first 10 card IDs
  const firstTenCardIds = rawArchenemyCards.slice(0, 10).map((card) => card.id);
  const secondTenCardIds = rawArchenemyCards
    .slice(10, 20)
    .map((card) => card.id);

  // Create deck with cards using nested create
  await prisma.archenemyDeck.upsert({
    where: { id: "some-unique-deck-id-1" },
    update: {},
    create: {
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
  await prisma.archenemyDeck.upsert({
    where: { id: "some-unique-deck-id-2" },
    update: {},
    create: {
      name: "Mediocre Archenemy Deck",
      description: "The most mediocre archenemy deck in the multiverse",
      isPublic: true,
      isArchived: false,
      userId: 1,
      deckCards: {
        create: secondTenCardIds.map((cardId) => ({
          card: {
            connect: { id: cardId },
          },
        })),
      },
    },
  });
}

export default main;
