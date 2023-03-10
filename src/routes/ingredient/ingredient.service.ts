import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  constructor(private readonly IngredientRepository: IngredientRepository) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.IngredientRepository.create(createIngredientDto);
  }

  findAll(orderBy: string, skip: number, take: number, name: string) {
    if (orderBy === 'protein' || orderBy === 'proteins') {
      return this.IngredientRepository.findManyByProteins(skip, take);
    }

    if (orderBy === 'carbohydrate' || orderBy === 'carbohydrates') {
      return this.IngredientRepository.findManyByCarbohydrates(skip, take);
    }

    if (
      orderBy === 'fat' ||
      orderBy === 'total_fat' ||
      orderBy === 'totalfat' ||
      orderBy === 'totalFat'
    ) {
      return this.IngredientRepository.findManyByTotalFat(skip, take);
    }

    if (orderBy === 'calories') {
      return this.IngredientRepository.findManyByCalories(skip, take);
    }
    if (name) {
      return this.IngredientRepository.findByName(name);
    }
    return this.IngredientRepository.findAll(skip, take);
  }

  findManyByGroup(group: string) {
    return this.IngredientRepository.findManyByGroup(group);
  }
  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
