/*
  Warnings:

  - You are about to drop the column `borderColor` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `cmc` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `collectorNumber` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `colorIdentity` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `colors` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `digital` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `foil` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `frame` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `imageLarge` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `layout` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `manaCost` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `nonfoil` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `oracleId` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `scryfallId` on the `ArchenemyCard` table. All the data in the column will be lost.
  - You are about to drop the column `setCode` on the `ArchenemyCard` table. All the data in the column will be lost.
  - Added the required column `borderCropImage` to the `ArchenemyCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `largeImage` to the `ArchenemyCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalImage` to the `ArchenemyCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."ArchenemyCard_scryfallId_key";

-- AlterTable
ALTER TABLE "public"."ArchenemyCard" DROP COLUMN "borderColor",
DROP COLUMN "cmc",
DROP COLUMN "collectorNumber",
DROP COLUMN "colorIdentity",
DROP COLUMN "colors",
DROP COLUMN "digital",
DROP COLUMN "foil",
DROP COLUMN "frame",
DROP COLUMN "imageLarge",
DROP COLUMN "keywords",
DROP COLUMN "layout",
DROP COLUMN "manaCost",
DROP COLUMN "nonfoil",
DROP COLUMN "oracleId",
DROP COLUMN "scryfallId",
DROP COLUMN "setCode",
DROP COLUMN "setType",
ADD COLUMN     "borderCropImage" TEXT NOT NULL,
ADD COLUMN     "largeImage" TEXT NOT NULL,
ADD COLUMN     "normalImage" TEXT NOT NULL,
ADD COLUMN     "set" TEXT NOT NULL,
ADD COLUMN     "reprint" BOOLEAN NOT NULL,
ADD COLUMN     "artistIds" TEXT[] NOT NULL,
ADD COLUMN     "rulingsUri" TEXT NOT NULL,
ADD COLUMN     "setId" TEXT NOT NULL,
ALTER COLUMN "releasedAt" SET DATA TYPE TEXT;
