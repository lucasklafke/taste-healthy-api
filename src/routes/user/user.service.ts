import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly UserRepository: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return this.UserRepository.create(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneByUsername(username: string) {
    return this.UserRepository.findOneByUsername(username);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
