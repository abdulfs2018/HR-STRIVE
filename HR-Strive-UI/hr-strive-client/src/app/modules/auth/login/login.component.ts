//angular imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  //TODO: just a dummy implementation, will be replaced when auth process is in place
  public logIn(): void {
    this.router.navigate(['/home']);
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [ null, [Validators.required, Validators.email, Validators.maxLength(255) ]],
      password: [ null, [Validators.required, Validators.min(8), Validators.maxLength(255) ]],
      confirmPassword: [ null, Validators.required, Validators.min(8), Validators.maxLength(255) ] //TODO: add confirm password validator
    });
  }
}
