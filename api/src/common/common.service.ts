import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CommonService {
  handleBMICalculation(height: number, weight: number) {
    // Calculate BMI using weight in pounds and height in inches
    const bmi = (weight / (height * height)) * 703;

    // Return BMI rounded to two decimal places
    return parseFloat(bmi.toFixed(2));
  }
}
