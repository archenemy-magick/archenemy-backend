import rawArchenemyCards from "./rawArchenemyCards.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface RawCard {
  id: string;
  name: string;
  lang: string;
  releasedAt: string;
  uri: string;
  normalImage: string;
  largeImage: string;
  borderCropImage: string;
  typeLine: string;
  oracleText: string;
  flavorText?: string;
  reprint: boolean;
  setId: string;
  set: string;
  setName: string;
  rulingsUri: string;
  rarity: string;
  artist: string;
  artistIds: string[];
}

async function main() {
  await prisma.archenemyCard.createMany({
    data: rawArchenemyCards as RawCard[],
    skipDuplicates: true,
  });
}

export default main;
