import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
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

  // regex is for a Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  passwordRegex : string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

  profileForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
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

      // implement logic for showing an alert with failed login -- not a form error as inputs are controlled by a disabled login button
      // what we want to check is the actual user exists, and if it does not, we show error we have invalid username and password input
    }
  }

}
