import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user.model';
import { UserPort } from '../../core/ports/user.port';

@Injectable({
  providedIn: 'root',
})
export class UserHttpAdapter implements UserPort {
  private apiUrl = 'http://localhost:3000'; // URL base de la API

  constructor(private http: HttpClient) {}

  login(email: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/login`, { email });
  }

  register(email: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/register`, { email });
  }
}