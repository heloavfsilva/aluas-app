import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.baseUrl);
    }

    getById(id: number) {
        return this.http.get(this.baseUrl+ id);
    }

    getByUsername(username: string): any {
        return this.http.get(this.baseUrl+username);
    }

    register(user: any) {
        return this.http.post(this.baseUrl+'/register', user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl+ id);
    }
}
