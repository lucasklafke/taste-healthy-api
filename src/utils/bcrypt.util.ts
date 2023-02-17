import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptUtil {
  private salt: number;

  constructor() {
    this.salt = 10;
  }
  encrypt(password: string) {
    const hash = bcrypt.hashSync(password, this.salt);
    return hash;
  }
  decrypt(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
