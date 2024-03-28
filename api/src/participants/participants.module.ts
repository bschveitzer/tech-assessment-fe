import { Module } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { ParticipantsResolver } from './resolvers/participants.resolver';
import { ParticipantsService } from './services/participants.service';
import { CommonService } from 'src/common/common.service';

@Module({
  providers: [
    ParticipantsResolver,
    ParticipantsService,
    PrismaService,
    CommonService,
  ],
})
export class ParticipantsModule {}
