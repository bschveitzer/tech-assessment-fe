import { Resolver, Query } from '@nestjs/graphql';
import { TrialsService } from '../services/trials.service';
import { Trial } from 'src/graphql';

@Resolver()
export class TrialsResolver {
  constructor(private trialsService: TrialsService) {}

  @Query('trials')
  async trials(): Promise<any> {
    return await this.trialsService.getTrials();
  }
}
