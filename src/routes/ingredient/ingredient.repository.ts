import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IngredientDosageService } from '../ingredient-dosage/ingredient-dosage.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Injectable()
export class IngredientRepository {
  constructor(
    private readonly PrismaService: PrismaService,
    private readonly IngredientDosageService: IngredientDosageService,
  ) {}

  async create(data: CreateIngredientDto) {
    return this.PrismaService.ingredient.create({ data });
  }

  findByName(name: string) {
    return this.PrismaService.ingredient.findMany({
      where: {
        name: {
          startsWith: name,
        },
      },
    });
  }

  findAll(skip: number, take: number) {
    return this.PrismaService.ingredient.findMany({ skip, take });
  }

  findManyByCalories(skip: number, take: number) {
    return this.PrismaService.ingredient.findMany({
      orderBy: {
        calories: 'desc',
      },
      skip,
      take,
    });
  }

  findManyByCarbohydrates(skip: number, take: number) {
    return this.PrismaService.ingredient.findMany({
      orderBy: {
        carbohydrates: 'desc',
      },
      skip,
      take,
    });
  }

  findManyByProteins(skip: number, take: number) {
    return this.PrismaService.ingredient.findMany({
      orderBy: {
        proteins: 'desc',
      },
      skip,
      take,
    });
  }

  findManyByTotalFat(skip: number, take: number) {
    return this.PrismaService.ingredient.findMany({
      orderBy: {
        total_fat: 'desc',
      },
      skip,
      take,
    });
  }
}
