import { User } from '../../../user/entities/user.entity';
import { loginMockData } from './login.mock.data';

export class UserMockService {
  async findUserByEmail(email: string): Promise<User> {
    const user = await loginMockData(email);
    return user;
  }
}
