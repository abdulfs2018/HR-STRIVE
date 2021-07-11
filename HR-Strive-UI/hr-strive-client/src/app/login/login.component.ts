import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }


  ngOnInit(): void {

  }

  validateEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      if (control.value == "kieronpeters1@gmail.com") {
        return  null;
      }
      return  {invalidEmail :'true'};
      
    };
  }

  validatePass(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value == "12345678tT@") {
        return  null;
      }
      return  {invalidPass: 'true'};
      
      
    };
  }

  // regex is for a Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  passwordRegex : string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  profileForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, this.validateEmail()]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex), this.validatePass()]),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn("passed validation");
    this.router.navigate(['logged-in']);
  }

}
