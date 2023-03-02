import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateIngredientDosageDto } from './dto/create-ingredient-dosage.dto';
import { Ingredient_dosage } from './entities/ingredient-dosage.entity';

@Injectable()
export class IngredientDosageRepository {
  constructor(private readonly PrismaService: PrismaService) {}

  async createMany(data: Ingredient_dosage[]) {
    const teste = await this.PrismaService.ingredient_dosage
      .createMany({
        data,
      })
      .catch((error) => {
        throw new NotFoundException(`${error}`);
      });

    return teste;
  }
}
