import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateIngredientDosageDto } from '../ingredient-dosage/dto/create-ingredient-dosage.dto';
import { Ingredient_dosage } from '../ingredient-dosage/entities/ingredient-dosage.entity';
import { IngredientDosageService } from '../ingredient-dosage/ingredient-dosage.service';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishRepository {
  constructor(
    private readonly PrismaService: PrismaService,
    private readonly IngredientDosageService: IngredientDosageService,
  ) {}

  async create(data: CreateDishDto) {
    return this.PrismaService.$transaction(async (prisma) => {
      const dish = await prisma.dish.create({
        data: {
          description: data.description,
          name: data.name,
          preparation: data.preparation,
          time_to_prepare: data.time_to_prepare,
        },
      });
      Logger.log(dish);
      const ingredientDosage = await this.IngredientDosageService.create(
        data.ingredients,
        dish.id,
      );
    });
  }
}
