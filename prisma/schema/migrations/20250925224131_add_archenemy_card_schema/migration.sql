/*
  Warnings:

  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deck_cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `decks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."deck_cards" DROP CONSTRAINT "deck_cards_card_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."deck_cards" DROP CONSTRAINT "deck_cards_deck_id_fkey";

-- DropTable
DROP TABLE "public"."cards";

-- DropTable
DROP TABLE "public"."deck_cards";

-- DropTable
DROP TABLE "public"."decks";

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
CREATE TABLE "public"."Decks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Deck_Cards" (
    "id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Deck_Cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArchenemyCards_scryfall_id_key" ON "public"."ArchenemyCards"("scryfall_id");

-- CreateIndex
CREATE UNIQUE INDEX "Deck_Cards_deck_id_card_id_key" ON "public"."Deck_Cards"("deck_id", "card_id");

-- AddForeignKey
ALTER TABLE "public"."Deck_Cards" ADD CONSTRAINT "Deck_Cards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "public"."Decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deck_Cards" ADD CONSTRAINT "Deck_Cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "public"."ArchenemyCards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
