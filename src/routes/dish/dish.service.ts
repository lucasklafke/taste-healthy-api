import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async update(id: number, updateDishDto: UpdateDishDto, userId: number) {
    const dish = await this.DishRepository.findOne(id);
    if (!dish) throw new NotFoundException('record not found');
    if (dish.author_id !== userId) {
      throw new UnauthorizedException('you are not the author');
    }
    return this.DishRepository.update(updateDishDto, dish.id);
  }

  async remove(id: number, userId: number) {
    const dish = await this.DishRepository.findOne(id);
    if (!dish) throw new NotFoundException('record not found');
    if (dish.author_id !== userId) {
      throw new UnauthorizedException('you are not the author');
    }
    return this.DishRepository.remove(id);
  }
}
