import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const testTrial = await prisma.trial.create({
    data: {
      name: 'Testing seed trial',
    },
  });

  await prisma.participant.create({
    data: {
      name: 'Alice',
      trialId: testTrial.id,
      medicalFile: {
        create: {
          height: 160,
          weight: 70,
          hasDiabetes: true,
          hadCovid: false,
        },
      },
    },
  });

  await prisma.participant.create({
    data: {
      name: 'Jose',
      trialId: testTrial.id,
      medicalFile: {
        create: {
          height: 180,
          weight: 80,
          hasDiabetes: true,
          hadCovid: false,
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
