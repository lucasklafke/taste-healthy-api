import { ConflictException, Injectable } from '@nestjs/common';
import CreateFoodGroupDto from './dto/create-foodGroup.dto';
import { foodGroupRepository } from './food-group.repository';

@Injectable()
export class FoodGroupService {
  constructor(private readonly foodGroupRepository: foodGroupRepository) {}
  async create(data: CreateFoodGroupDto) {
    const foodGroup = await this.foodGroupRepository.findUniqueByGroup(
      data.group,
    );
    if (foodGroup) throw new ConflictException('this group already exist');
    return this.foodGroupRepository.create(data);
  }

  findAll(filter: any) {
    return this.foodGroupRepository.findAll();
  }
}
