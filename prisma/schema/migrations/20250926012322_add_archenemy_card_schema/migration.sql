/*
  Warnings:

  - You are about to drop the `Cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeckCards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Decks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DeckCards" DROP CONSTRAINT "DeckCards_card_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."DeckCards" DROP CONSTRAINT "DeckCards_deck_id_fkey";

-- DropTable
DROP TABLE "public"."Cards";

-- DropTable
DROP TABLE "public"."DeckCards";

-- DropTable
DROP TABLE "public"."Decks";

-- CreateTable
CREATE TABLE "public"."ArchenemyCards" (
    "id" TEXT NOT NULL,
    "scryfall_id" TEXT NOT NULL,
    "oracle_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL DEFAULT 'en',
    "released_at" TIMESTAMP(3) NOT NULL,
    "mana_cost" TEXT NOT NULL,
    "cmc" DOUBLE PRECISION NOT NULL,
    "type_line" TEXT NOT NULL,
    "oracle_text" TEXT,
    "flavor_text" TEXT,
    "colors" TEXT[],
    "color_identity" TEXT[],
    "keywords" TEXT[],
    "set_code" TEXT NOT NULL,
    "set_name" TEXT NOT NULL,
    "set_type" TEXT NOT NULL,
    "collector_number" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "layout" TEXT NOT NULL,
    "border_color" TEXT NOT NULL,
    "frame" TEXT NOT NULL,
    "foil" BOOLEAN NOT NULL DEFAULT false,
    "nonfoil" BOOLEAN NOT NULL DEFAULT true,
    "digital" BOOLEAN NOT NULL DEFAULT false,
    "image_large" TEXT NOT NULL,

    CONSTRAINT "ArchenemyCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ArchenemyDecks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArchenemyDecks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ArchenemyDeckCards" (
    "id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "ArchenemyDeckCards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArchenemyCards_scryfall_id_key" ON "public"."ArchenemyCards"("scryfall_id");

-- CreateIndex
CREATE UNIQUE INDEX "ArchenemyDeckCards_deck_id_card_id_key" ON "public"."ArchenemyDeckCards"("deck_id", "card_id");

-- AddForeignKey
ALTER TABLE "public"."ArchenemyDeckCards" ADD CONSTRAINT "ArchenemyDeckCards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "public"."ArchenemyDecks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ArchenemyDeckCards" ADD CONSTRAINT "ArchenemyDeckCards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "public"."ArchenemyCards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
