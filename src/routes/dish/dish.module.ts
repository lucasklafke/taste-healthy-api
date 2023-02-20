import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DishRepository } from './dish.repository';
import { IngredientDosageService } from '../ingredient-dosage/ingredient-dosage.service';
import { IngredientDosageRepository } from '../ingredient-dosage/ingredient-dosage.repository';
import { IngredientService } from '../ingredient/ingredient.service';
import { IngredientRepository } from '../ingredient/ingredient.repository';

@Module({
  controllers: [DishController],
  providers: [
    DishService,
    PrismaService,
    DishRepository,
    IngredientDosageService,
    IngredientDosageRepository,
    IngredientService,
    IngredientRepository,
  ],
})
export class DishModule {}
