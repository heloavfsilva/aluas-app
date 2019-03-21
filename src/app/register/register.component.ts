import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { AlertService } from "../shared/alert.service";
import { UserService } from "../user/user.service";
import { first } from 'rxjs/operators';
import { User } from '../user/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {
     registerForm: FormGroup;
     loading = false;
     submitted = false;
     returnUrl: string;
     constructor(
         private formBuilder: FormBuilder,
         private router: Router,
         private route: ActivatedRoute,
         private authService: AuthService,
         private userService: UserService,
         private alertService: AlertService
     ) {
         // redirect to home if already logged in
         if (localStorage.getItem('currentUser')) {
             this.router.navigate(['/home']);
         }
     }

     ngOnInit() {
         this.registerForm = this.formBuilder.group({
             firstName: ['', Validators.required],
             lastName: ['', Validators.required],
             username: ['', Validators.required],
             email: ['', Validators.required],
             password: ['', [Validators.required, Validators.minLength(6)]]

         });
         // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
     }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

     onSubmit(formInfo: any) {
         // stop here if form is invalid
         this.submitted = true;

         if (this.registerForm.invalid) {
             return;
         }

         this.loading = true;
         const newUser: User = {
           id: '',
           primeiroNome: formInfo.firstName,
           sobrenome: formInfo.lastName,
           username: formInfo.username,
           email: formInfo.email,
           password: formInfo.password
         }
         this.userService.register(newUser)
             .pipe(first())
             .subscribe(
                 data => {
                     this.alertService.success('Registration successful', true);
                     this.router.navigate(['/login']);
                 },
                 error => {
                     this.alertService.error(error);
                     this.loading = false;
                 });
     }

}
