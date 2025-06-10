import { User } from "../entities/user.entity";

export interface UserRepository {
  getUser(email: string): Promise<User | null>;
  addUser(email: string): Promise<User>;
}
