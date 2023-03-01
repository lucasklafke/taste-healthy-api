import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
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
          author_id: data.author_id,
        },
      });
      data.ingredients.forEach((ingredient) => {
        ingredient.dish_id = dish.id;
      });
      const ingredientDosage = await prisma.ingredient_dosage
        .createMany({
          data: data.ingredients,
        })
        .catch((error) => {
          throw new NotFoundException(`${error}`);
        });
    });
  }

  async findByName(name: string) {
    return this.PrismaService.dish.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      select: {
        name: true,
        description: true,
        preparation: true,
        author_id: true,
        ingredient_dosage: {
          select: { quantity: true, ingredient: { select: { name: true } } },
        },
      },
    });
  }

  async findAll() {
    return this.PrismaService.dish.findMany({
      select: {
        name: true,
        description: true,
        preparation: true,
        author_id: true,
        ingredient_dosage: {
          select: { quantity: true, ingredient: { select: { name: true } } },
        },
      },
    });
  }
  async findOne(id: number) {
    return await this.PrismaService.dish.findFirst({
      where: {
        id,
      },
      include: {
        ingredient_dosage: true,
      },
    });
  }
}
