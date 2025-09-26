-- CreateEnum
CREATE TYPE "public"."userStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'SUSPENDED', 'TEST');

-- CreateTable
CREATE TABLE "public"."cards" (
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

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."decks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."deck_cards" (
    "id" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "deck_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "status" "public"."userStatus" NOT NULL DEFAULT 'ACTIVE',
    "salt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_scryfall_id_key" ON "public"."cards"("scryfall_id");

-- CreateIndex
CREATE UNIQUE INDEX "deck_cards_deck_id_card_id_key" ON "public"."deck_cards"("deck_id", "card_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- AddForeignKey
ALTER TABLE "public"."deck_cards" ADD CONSTRAINT "deck_cards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "public"."decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."deck_cards" ADD CONSTRAINT "deck_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
