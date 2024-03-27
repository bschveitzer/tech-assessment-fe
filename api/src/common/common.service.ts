import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EnrollParticipant } from 'src/graphql';

@Injectable()
export class CommonService {
  static readonly minBmiValue = 18;
  static readonly maxBmiValue = 30;

  handleBMICalculation(height: number, weight: number) {
    // Calculate BMI using weight in pounds and height in inches
    const bmi = (weight / (height * height)) * 703;

    // Return BMI rounded to the nearest whole number
    return Math.round(bmi);
  }

  checkElibilityForTrial(participant: EnrollParticipant) {
    if (!participant.hasDiabetes) {
      return false;
    }

    if (participant.hadCovid) {
      return false;
    }

    const bmi = this.handleBMICalculation(
      participant.height,
      participant.weight,
    );
    // Check if BMI is within the trial's BMI range
    if (bmi <= CommonService.minBmiValue && bmi >= CommonService.maxBmiValue) {
      return false;
    }

    return true;
  }
}
