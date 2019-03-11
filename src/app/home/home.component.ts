import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'],
})
export class HomeComponent{
  currentUser: string;

  constructor(private http: HttpClient,
              private router: Router,
              private authService:AuthService) {
      //this.authService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUser = localStorage.getItem('currentUser');
    };

  }
