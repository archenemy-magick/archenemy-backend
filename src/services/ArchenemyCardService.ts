import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

/**
 * Get all archenemy cards
 */
async function getAllArchenemyCards() {
  // TODO: error handling
  return await prisma.archenemyCard
    .findMany()
    .then((cards) => cards)
    .catch((e: unknown) => {
      console.log("error while fetching archenemy cards", e);
    });
}

export { getAllArchenemyCards };
