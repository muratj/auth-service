import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (user.password === password) {
      delete user.password;
      return user;
    }
    throw new UnauthorizedException(`Incorrect credentials`);
  }
}
