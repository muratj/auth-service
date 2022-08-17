import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/user/entities/user.entity';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { UserMockService } from './__mocks__/user.mock.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useClass: UserMockService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });
  test('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('login', () => {
    let user: User;
    test('when login method called', async () => {
      user = await service.validateUser('test@test.com', 'testpassword');
    });
    test('then expect user to be valid', () => {
      expect(user).toBeDefined();
    });
    test('and expect password undefined', () => {
      expect(user.password).toBeUndefined();
    });
  });
});
