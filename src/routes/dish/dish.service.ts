import { Injectable, Logger } from '@nestjs/common';
import { DishRepository } from './dish.repository';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(private readonly DishRepository: DishRepository) {}
  create(createDishDto: CreateDishDto) {
    return this.DishRepository.create(createDishDto);
  }

  findAll(filters: { name: string }) {
    if (filters.name !== undefined) {
      return this.DishRepository.findByName(filters.name);
    }
    return this.DishRepository.findAll();
  }

  findByName(name: string) {
    return this.DishRepository.findByName(name);
  }
  findOne(id: number) {
    return this.DishRepository.findOne(id);
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
