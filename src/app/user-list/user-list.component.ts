import { Component, OnInit } from '@angular/core';
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private router:Router, private authService:AuthService, private userService:UserService) { }

  ngOnInit() {
   // if(!window.localStorage.getItem('token')) {
   //   this.router.navigate(['login']);
   //   return;
   // }
   // this.userService.getAll()
   //   .subscribe( data => {
   //       this.users = data.result;
   //   });
 }

 // deleteUser(user: User): void {
 //    this.userService.delete(user.id)
 //      .subscribe( data => {
 //        this.users = this.users.filter(u => u !== user);
 //      })
 //  };

  // editUser(user: User): void {
  //   window.localStorage.removeItem("editUserId");
  //   window.localStorage.setItem("editUserId", user.id.toString());
  //   this.router.navigate(['edit-user']);
  // };
  //
  // addUser(): void {
  //   this.router.navigate(['add-user']);
  // };

}
