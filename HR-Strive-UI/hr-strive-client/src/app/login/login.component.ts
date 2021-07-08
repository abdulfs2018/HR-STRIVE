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
      // execute check on db here (return null for passing, return some value as true to check in ngif in html to reveal a div with alert email exists already)
      return  {alreadyExist: 'true'};
    };
  }

  // TODO: regex is for a Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  passwordRegex : string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  profileForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, this.validateEmail()]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value -- replace logic check below with API request returning true or false to redirect user to welcome page
    console.warn(this.profileForm.value);

    if (this.profileForm.value.email == "kieronpeters1@gmail.com" && this.profileForm.value.password == "12345678tT@") {
      console.warn("passed validation");
      this.router.navigate(['logged-in']);
    } else {
      console.warn("failed validation");
    }
  }

}
