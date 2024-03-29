import {
  Resolver,
  Query,
  Mutation,
  Args,
  InputType,
  Field,
} from '@nestjs/graphql';
import { EnrollParticipantResponse } from 'src/graphql';
import { ParticipantsService } from 'src/participants/services/participants.service';

@InputType()
export class EnrollParticipantInput {
  @Field()
  name: string;
  @Field()
  trialId: string;
  @Field({ nullable: true })
  height?: number;
  @Field({ nullable: true })
  weight?: number;
  @Field({ nullable: true })
  hasDiabetes?: boolean;
  @Field({ nullable: true })
  hadCovid?: boolean;
}
@Resolver()
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query('participants')
  async participants(): Promise<{ name: string }[]> {
    return await this.participantsService.getParticipants();
  }

  @Mutation()
  async enrollParticipant(
    @Args('participant') participant: EnrollParticipantInput,
  ): Promise<EnrollParticipantResponse> {
    return this.participantsService.enrollParticipant(participant);
  }
}
