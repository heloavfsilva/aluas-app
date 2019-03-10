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
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl = 'http://localhost:8080/auth';
  user: User;
  acesso: Acesso;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<Acesso>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Acesso {
    return this.currentUserSubject.value;
  }

  // login(username: string, password: string) {
  //       return this.http.post<any>(this.baseUrl, { username, password })
  //           .pipe(map(user => {
  //               // login successful if there's a jwt token in the response
  //               if (user && user.token) {
  //                   // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                   localStorage.setItem('currentUser', JSON.stringify(user));
  //                   this.currentUserSubject.next(user);
  //               }
  //
  //               return user;
  //           }));
  //   }


  login(username:string, password:string) {
    return this.http.post<{currentUser:  Acesso}>(this.baseUrl, {username, password}).pipe(map(res => {
      localStorage.setItem('currentUser', res.username);
      console.log(localStorage.getItem('currentUser'));
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);

  }
}
