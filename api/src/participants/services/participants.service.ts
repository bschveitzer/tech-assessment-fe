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
    const participants = await this.prismaService.participant.findMany({
      where: whereInput,
    });

    return participants.map((participant) => ({
      ...participant,
      createdAt: participant.createdAt.toISOString(),
    }));
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
