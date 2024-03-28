import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EnrollParticipant, EnrollParticipantResponse } from 'src/graphql';
import { ParticipantsService } from 'src/participants/services/participants.service';

@Resolver()
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query('participants')
  async participants(): Promise<{ name: string }[]> {
    return await this.participantsService.getParticipants();
  }

  @Mutation('enrollParticipant')
  async enrollParticipant(
    @Args('participant') participant: EnrollParticipant,
  ): Promise<EnrollParticipantResponse> {
    return this.participantsService.enrollParticipant(participant);
  }
}
