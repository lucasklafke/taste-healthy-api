import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { BcryptUtil } from 'src/utils/bcrypt.util';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService, BcryptUtil],
})
export class UserModule {}
