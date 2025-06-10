import { UserRepository } from '../repositories/user.repository';
import { User } from '../../domain/entities/user.entity';

const userRepository = new UserRepository();

export class UserService {
  async getUser(email: string): Promise<User | null> {
    return await userRepository.getUser(email);
  }

  async addUser(email: string): Promise<User> {
    return await userRepository.addUser(email);
  }
}
