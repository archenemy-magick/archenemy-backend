/*
  Warnings:

  - You are about to drop the `ArchenemyCards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArchenemyDeckCards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArchenemyDecks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ArchenemyDeckCards" DROP CONSTRAINT "ArchenemyDeckCards_card_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ArchenemyDeckCards" DROP CONSTRAINT "ArchenemyDeckCards_deck_id_fkey";

-- DropTable
DROP TABLE "public"."ArchenemyCards";

-- DropTable
DROP TABLE "public"."ArchenemyDeckCards";

-- DropTable
DROP TABLE "public"."ArchenemyDecks";

-- CreateTable
CREATE TABLE "public"."Cards" (
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

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Decks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DeckCards" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "DeckCards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_scryfallId_key" ON "public"."Cards"("scryfallId");

-- CreateIndex
CREATE UNIQUE INDEX "DeckCards_deckId_cardId_key" ON "public"."DeckCards"("deckId", "cardId");

-- AddForeignKey
ALTER TABLE "public"."DeckCards" ADD CONSTRAINT "DeckCards_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "public"."Decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DeckCards" ADD CONSTRAINT "DeckCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "public"."Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
