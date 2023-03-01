import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptUtil {
  private salt: number;

  constructor() {
    this.salt = Number(process.env.SALT);
  }
  encrypt(password: string) {
    const hash = bcrypt.hashSync(password, this.salt);
    return hash;
  }
  decrypt(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
