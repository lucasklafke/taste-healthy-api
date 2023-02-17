import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

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
}
