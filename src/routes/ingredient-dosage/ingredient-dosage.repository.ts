import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateIngredientDosageDto } from './dto/create-ingredient-dosage.dto';
import { Ingredient_dosage } from './entities/ingredient-dosage.entity';

@Injectable()
export class IngredientDosageRepository {
  constructor(private readonly PrismaService: PrismaService) {}

  async createMany(data: Ingredient_dosage[]) {
    return this.PrismaService.ingredient_dosage.createMany({ data });
  }
}
