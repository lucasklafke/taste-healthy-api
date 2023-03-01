import { ConflictException, Injectable } from '@nestjs/common';
import { BcryptUtil } from 'src/utils/bcrypt.util';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly UserRepository: UserRepository,
    private readonly bcryptUtil: BcryptUtil,
  ) {}
  create(createUserDto: CreateUserDto) {
    const userAlreadyExist = this.UserRepository.findOneByEmail(
      createUserDto.email,
    );
    if (userAlreadyExist) throw new ConflictException('email already exist');
    const hashedPassword = this.bcryptUtil.encrypt(createUserDto.password);
    createUserDto.password = hashedPassword;
    return this.UserRepository.create(createUserDto);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneByUsername(username: string) {
    return this.UserRepository.findOneByUsername(username);
  }

  findOneByEmail(email: string) {
    return this.UserRepository.findOneByEmail(email);
  }

  findOne(id: number) {
    return this.UserRepository.findOneById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
