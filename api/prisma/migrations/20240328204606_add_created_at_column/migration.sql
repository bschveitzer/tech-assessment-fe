-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Participant_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Participant" ("id", "name", "trialId") SELECT "id", "name", "trialId" FROM "Participant";
DROP TABLE "Participant";
ALTER TABLE "new_Participant" RENAME TO "Participant";
CREATE TABLE "new_Trial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Trial" ("id", "name") SELECT "id", "name" FROM "Trial";
DROP TABLE "Trial";
ALTER TABLE "new_Trial" RENAME TO "Trial";
CREATE TABLE "new_MedicalFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "hasDiabetes" BOOLEAN,
    "hadCovid" BOOLEAN,
    "participantId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MedicalFile_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_MedicalFile" ("hadCovid", "hasDiabetes", "height", "id", "participantId", "weight") SELECT "hadCovid", "hasDiabetes", "height", "id", "participantId", "weight" FROM "MedicalFile";
DROP TABLE "MedicalFile";
ALTER TABLE "new_MedicalFile" RENAME TO "MedicalFile";
CREATE UNIQUE INDEX "MedicalFile_participantId_key" ON "MedicalFile"("participantId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
