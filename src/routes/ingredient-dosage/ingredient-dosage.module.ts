import { Module } from '@nestjs/common';
import { IngredientDosageService } from './ingredient-dosage.service';
import { IngredientDosageController } from './ingredient-dosage.controller';
import { IngredientDosageRepository } from './ingredient-dosage.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IngredientDosageController],
  providers: [
    IngredientDosageService,
    IngredientDosageRepository,
    PrismaService,
  ],
})
export class IngredientDosageModule {}
