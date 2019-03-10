import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser: User;
  username: string;

  constructor(private http: HttpClient,
              private router: Router,
              private authService:AuthService) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
    };


    ngOnInit(){
      alert('home here!');
      //console.log(this.authService.currentUser.getItem(currentUser["username"]));
      //this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
      //console.log(this.currentUser.username);
    }

  }
