import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { BcryptUtil } from '../../utils/bcrypt.util';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly UsersService: UserService,
    private readonly bcryptUtil: BcryptUtil,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    let user: User;
    try {
      user = await this.UsersService.findOneByUsername(username);
      if (!user) return null;
    } catch (error) {
      return null;
    }
    const isPasswordValid = this.bcryptUtil.decrypt(password, user.password);

    if (!isPasswordValid) return null;
    return user;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET_KEY,
      }),
    };
  }
}
