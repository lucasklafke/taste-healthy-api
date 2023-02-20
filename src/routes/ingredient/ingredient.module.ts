import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';
import { IngredientRepository } from './ingredient.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { IngredientDosageService } from '../ingredient-dosage/ingredient-dosage.service';
import { IngredientDosageRepository } from '../ingredient-dosage/ingredient-dosage.repository';

@Module({
  controllers: [IngredientController],
  providers: [
    IngredientService,
    IngredientRepository,
    PrismaService,
    IngredientDosageService,
    IngredientDosageRepository,
  ],
})
export class IngredientModule {}
