import { Role } from '../../../user/entities/role.enum';
import { User } from '../../../user/entities/user.entity';

export const loginMockData = (email: string): User => {
  return {
    id: 1,
    email: email,
    password: 'testpassword',
    role: Role.USER,
  };
};
