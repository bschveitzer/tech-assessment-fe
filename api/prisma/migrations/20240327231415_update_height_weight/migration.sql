/*
  Warnings:

  - You are about to alter the column `height` on the `MedicalFile` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `weight` on the `MedicalFile` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MedicalFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "hasDiabetes" BOOLEAN,
    "hadCovid" BOOLEAN,
    "participantId" TEXT NOT NULL,
    CONSTRAINT "MedicalFile_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MedicalFile" ("hadCovid", "hasDiabetes", "height", "id", "participantId", "weight") SELECT "hadCovid", "hasDiabetes", "height", "id", "participantId", "weight" FROM "MedicalFile";
DROP TABLE "MedicalFile";
ALTER TABLE "new_MedicalFile" RENAME TO "MedicalFile";
CREATE UNIQUE INDEX "MedicalFile_participantId_key" ON "MedicalFile"("participantId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
