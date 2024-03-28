import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class TrialsService {
  constructor(private prismaService: PrismaService) {}

  async getTrials(whereInput?: Prisma.TrialWhereInput) {
    const trials = await this.prismaService.trial.findMany({
      where: whereInput,
      include: {
        _count: {
          select: { participants: true },
        },
      },
    });

    return trials.map((trial) => ({
      ...trial,
      createdAt: trial.createdAt.toISOString(),
    }));
  }

  async getTrialById(whereUniqueInput: Prisma.TrialWhereUniqueInput) {
    return this.prismaService.trial.findUnique({ where: whereUniqueInput });
  }
}
