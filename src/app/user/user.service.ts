import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.baseUrl+'/users');
    }

    getById(id: number) {
        return this.http.get(this.baseUrl+'/users/${id}');
    }

    register(user: User) {
        return this.http.post(this.baseUrl+'/users/register', user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl + '/users/${user.id}', user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl+'/users/${id}');
    }
}
