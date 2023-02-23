import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly PrismaService: PrismaService) {}

  async findOneByUsername(username: string) {
    return this.PrismaService.user.findFirst({
      where: {
        username: username,
      },
    });
  }

  async create(data: CreateUserDto) {
    return await this.PrismaService.user.create({
      data,
    });
  }
}
