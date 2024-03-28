import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CommonService } from 'src/common/common.service';
import { PrismaService } from 'src/common/prisma.service';
import { EnrollParticipant } from 'src/graphql';

@Injectable()
export class ParticipantsService {
  constructor(
    private prismaService: PrismaService,
    private commonService: CommonService,
  ) {}

  async getParticipants(whereInput?: Prisma.ParticipantWhereInput) {
    return this.prismaService.participant.findMany({
      where: whereInput,
      include: { trial: true },
    });
  }

  async enrollParticipant(participant: EnrollParticipant) {
    const isEligible = this.commonService.checkElibilityForTrial(participant);

    const { name, trialId, height, weight, hadCovid, hasDiabetes } =
      participant;

    if (isEligible) {
      const createdParticipant = await this.prismaService.participant.create({
        data: {
          name,
          trial: {
            connect: {
              id: trialId,
            },
          },
          medicalFile: {
            create: {
              height,
              weight,
              hasDiabetes,
              hadCovid,
            },
          },
        },
      });

      return { id: createdParticipant.id, isEligible: true };
    }

    return { id: null, isEligible: false };
  }
}
