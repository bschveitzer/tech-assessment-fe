/*
  Warnings:

  - You are about to drop the column `height` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `height` to the `MedicalFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `MedicalFile` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MedicalFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "hasDiabetes" BOOLEAN,
    "hadCovid" BOOLEAN,
    "participantId" TEXT NOT NULL,
    CONSTRAINT "MedicalFile_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MedicalFile" ("hadCovid", "hasDiabetes", "id", "participantId") SELECT "hadCovid", "hasDiabetes", "id", "participantId" FROM "MedicalFile";
DROP TABLE "MedicalFile";
ALTER TABLE "new_MedicalFile" RENAME TO "MedicalFile";
CREATE UNIQUE INDEX "MedicalFile_participantId_key" ON "MedicalFile"("participantId");
CREATE TABLE "new_Participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,
    CONSTRAINT "Participant_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Participant" ("id", "name", "trialId") SELECT "id", "name", "trialId" FROM "Participant";
DROP TABLE "Participant";
ALTER TABLE "new_Participant" RENAME TO "Participant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
