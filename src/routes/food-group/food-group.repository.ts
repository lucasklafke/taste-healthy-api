import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import CreateFoodGroupDto from './dto/create-foodGroup.dto';

@Injectable()
export class foodGroupRepository {
  constructor(private readonly PrismaService: PrismaService) {}

  create(data: CreateFoodGroupDto) {
    return this.PrismaService.food_group.create({ data });
  }

  findAll() {
    return this.PrismaService.food_group.findMany();
  }
}
