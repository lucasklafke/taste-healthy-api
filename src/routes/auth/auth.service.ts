import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { BcryptUtil } from '../../utils/bcrypt.util';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

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
      if (!user) throw new UnauthorizedException(`user ${user} not found`);
    } catch (error) {
      throw new UnauthorizedException(`user ${user} not found`);
    }
    const isPasswordValid = this.bcryptUtil.decrypt(password, user.password);

    if (!isPasswordValid) throw new UnauthorizedException(`password not valid`);
    return user;
  }

  login(user: User) {
    const payload = { sub: user.id, username: user.username };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
