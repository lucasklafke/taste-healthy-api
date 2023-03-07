import { Module } from '@nestjs/common';
import { FoodGroupService } from './food-group.service';
import { FoodGroupController } from './food-group.controller';
import { foodGroupRepository } from './food-group.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FoodGroupController],
  providers: [FoodGroupService, foodGroupRepository, PrismaService],
})
export class FoodGroupModule {}
