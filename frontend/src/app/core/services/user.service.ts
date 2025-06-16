import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserPort } from '../ports/user.port';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(@Inject('UserPort') private userPort: UserPort) {}

  login(email: string): Observable<User> {
    return this.userPort.login(email);
  }

  registerUser(email: string): Observable<User> {
    return this.userPort.register(email);
  }
}