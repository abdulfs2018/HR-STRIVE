import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public invalid: boolean = false;

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

    console.warn(this.profileForm.value);

    // replace with API validation call
    if (this.profileForm.value.email == "kieronpeters1@gmail.com") {
      console.warn("passed validation");
      // replace data example string with generated login token from API
      const navigationExtras: NavigationExtras = {state: {example: 'This is an example'}};
      this.router.navigate(['logged-in'], navigationExtras);
    }
    this.invalid = true;

  }

}
