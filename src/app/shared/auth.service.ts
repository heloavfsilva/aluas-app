import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { Acesso } from '../user/acesso';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<Acesso>;
  public currentUser: string;
  baseUrl = 'http://localhost:8080/auth';
  user: User;
  acesso: Acesso;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  login(username:string, password:string) {
    return this.http.post<{currentUser:  Acesso}>(this.baseUrl, {username, password}).pipe(map(res => {
      localStorage.setItem('currentUser', res['username']);
      localStorage.setItem('usuario', res['usuario']);
      console.log(localStorage.getItem('currentUser'));
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

  }
}
