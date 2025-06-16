import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export interface UserPort {
  login(email: string): Observable<User>;
  register(email: string): Observable<User>;
}