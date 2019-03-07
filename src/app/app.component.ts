import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';
library.add(faTimes, faPlus);

import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(private http: HttpClient,
              private router: Router,
              private authService:AuthService) {
        this.authService.currentUser.subscribe(x => this.currentUser = x);
    };


    logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
      }
}
