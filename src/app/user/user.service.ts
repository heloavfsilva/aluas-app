import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:8080/auth';
    user;

    constructor(private http: HttpClient) {
    this.user = localStorage.getItem('usuario');
   }

    getAll() {
        return this.http.get<User[]>(this.baseUrl);
    }

    getById(id: string) {
        return this.http.get(this.baseUrl+ id);
    }

    getByUsername(username: string): any {
        return this.http.get(this.baseUrl+'/'+username);
    }
    getScore(username: string): any {
        return this.http.get(this.baseUrl+'/score/'+username);
    }

    getMeta(): any {
        return this.http.get(this.baseUrl+'/meta/'+this.user);
    }

    register(user: any) {
        return this.http.post(this.baseUrl+'/register', user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl+'/'+user.id, user);
    }

    updateMeta(meta: number) {
      alert('chamou o user service!'+ meta + this.user);
      return this.http.put('http://localhost:8080/meta/'+meta, this.user)
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl+ id);
    }
}
