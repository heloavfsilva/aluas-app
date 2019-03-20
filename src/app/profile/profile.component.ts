import { Component, OnInit, Inject } from '@angular/core';
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthService } from "../shared/auth.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ UserService ]
})
export class ProfileComponent implements OnInit {

  user: User={};
  // scoreAcumulado : number;
  profileForm: FormGroup;
  currentUser: string;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) {
    this.currentUser = localStorage.getItem('currentUser');
  }

  ngOnInit() {
    this.selectProfile();
  }

  selectProfile(){
    console.log('profile here!')
    this.userService.getByUsername(this.currentUser)
    .pipe(first())
    .subscribe(user => {
      this.user = user;
    });
  }
  //   this.editForm = this.formBuilder.group({
  //     id: [''],
  //     username: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     age: ['', Validators.required],
  //     salary: ['', Validators.required]
  //   });
  //   this.apiService.getUserById(+userId)
  //     .subscribe( data => {
  //       this.editForm.setValue(data.result);
  //     });
  // }
  //
  save() {
    this.userService.update(this.user)

    alert('User updated successfully.');
    this.router.navigate(['painel']);
  }

}
