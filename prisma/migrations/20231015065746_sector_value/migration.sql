/*
  Warnings:

  - Added the required column `sectorValue` to the `sectors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sectors" ADD COLUMN     "sectorValue" INTEGER NOT NULL;
