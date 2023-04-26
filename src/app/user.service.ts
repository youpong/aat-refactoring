import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);
  constructor() { }

  getUsers(): Observable<User[]> {
    return this.http.get<{ data: User[] }>('https://reqres.in/api/users')
    .pipe(map(resp => resp.data));
  }
}
