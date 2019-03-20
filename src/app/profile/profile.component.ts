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

  user: User;
  scoreAcumulado : number;
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.selectProfile();
    console.log(this.user);
  }

  selectProfile(){
    console.log('profile here!')
      this.userService.getByUsername(localStorage.getItem('currentUser'))
      .subscribe( data => {
            this.user = data;
            this.scoreAcumulado = data.scoreAcumulado;
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
  onSubmit() {
    this.userService.update(this.profileForm.value)
    .pipe(first())
    .subscribe(
      data => {
        if(data) {
          alert('User updated successfully.');
          this.router.navigate(['painel']);
        }else {
          alert(data);
        }
      },
      error => {
        alert(error);
      });
    }

  }
