/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Decks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DeckCards" DROP CONSTRAINT "DeckCards_cardId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DeckCards" DROP CONSTRAINT "DeckCards_deckId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "decks" TEXT[];

-- DropTable
DROP TABLE "public"."Cards";

-- DropTable
DROP TABLE "public"."Decks";

-- CreateTable
CREATE TABLE "public"."ArchenemyCard" (
    "id" TEXT NOT NULL,
    "scryfallId" TEXT NOT NULL,
    "oracleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL DEFAULT 'en',
    "releasedAt" TIMESTAMP(3) NOT NULL,
    "manaCost" TEXT NOT NULL,
    "cmc" DOUBLE PRECISION NOT NULL,
    "typeLine" TEXT NOT NULL,
    "oracleText" TEXT,
    "flavorText" TEXT,
    "colors" TEXT[],
    "colorIdentity" TEXT[],
    "keywords" TEXT[],
    "setCode" TEXT NOT NULL,
    "setName" TEXT NOT NULL,
    "setType" TEXT NOT NULL,
    "collectorNumber" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "borderColor" TEXT NOT NULL,
    "frame" TEXT NOT NULL,
    "foil" BOOLEAN NOT NULL DEFAULT false,
    "nonfoil" BOOLEAN NOT NULL DEFAULT true,
    "digital" BOOLEAN NOT NULL DEFAULT false,
    "imageLarge" TEXT NOT NULL,

    CONSTRAINT "ArchenemyCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ArchenemyDeck" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "ArchenemyDeck_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArchenemyCard_scryfallId_key" ON "public"."ArchenemyCard"("scryfallId");

-- AddForeignKey
ALTER TABLE "public"."ArchenemyDeck" ADD CONSTRAINT "ArchenemyDeck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DeckCards" ADD CONSTRAINT "DeckCards_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "public"."ArchenemyDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DeckCards" ADD CONSTRAINT "DeckCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "public"."ArchenemyCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
