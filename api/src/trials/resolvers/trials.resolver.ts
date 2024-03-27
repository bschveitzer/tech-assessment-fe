import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { TrialsService } from '../services/trials.service';
import { Trial } from 'src/graphql';
import { ParticipantsService } from 'src/participants/services/participants.service';

@Resolver()
export class TrialsResolver {
  constructor(private trialsService: TrialsService) {}

  @Query('trials')
  async trials(): Promise<Trial[]> {
    return await this.trialsService.getTrials();
  }
}
