import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { Acesso } from '../shared/acesso';
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

  login(username: string, password: string) {
    let result = this.http.post(this.baseUrl, { username, password }).pipe(acesso => {
       // login successful if there's a jwt token in the response
       this.acesso = acesso
       if (this.acesso && this.acesso.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
       localStorage.setItem('currentUser', JSON.stringify(this.acesso));
       this.currentUserSubject.next(this.acesso);
       this.router.navigate(['/']);
      }
    });
    return result;
  }

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
  this.router.navigate(['/login']);

}
}
