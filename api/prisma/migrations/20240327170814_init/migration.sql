-- CreateTable
CREATE TABLE "Participant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "trialId" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    CONSTRAINT "Participant_trialId_fkey" FOREIGN KEY ("trialId") REFERENCES "Trial" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicalFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hasDiabetes" BOOLEAN,
    "hadCovid" BOOLEAN,
    "participantId" TEXT NOT NULL,
    CONSTRAINT "MedicalFile_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalFile_participantId_key" ON "MedicalFile"("participantId");
