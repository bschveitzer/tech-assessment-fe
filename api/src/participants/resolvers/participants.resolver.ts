import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  EnrollParticipant,
  EnrollParticipantResponse,
  Participant,
  Trial,
} from 'src/graphql';
import { ParticipantsService } from 'src/participants/services/participants.service';

@Resolver()
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query('participants')
  async participants(): Promise<Participant[]> {
    return await this.participantsService.getParticipants();
  }
}
