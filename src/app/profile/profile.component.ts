import { Component, OnInit, Inject } from '@angular/core';
import { User } from "../user/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  //
  // user: User;
  // editForm: FormGroup;
  // constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }
  //
  ngOnInit() {

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
  // onSubmit() {
  //   this.apiService.updateUser(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         if(data.status === 200) {
  //           alert('User updated successfully.');
  //           this.router.navigate(['list-user']);
  //         }else {
  //           alert(data.message);
  //         }
  //       },
  //       error => {
  //         alert(error);
  //       });
  // }

}
