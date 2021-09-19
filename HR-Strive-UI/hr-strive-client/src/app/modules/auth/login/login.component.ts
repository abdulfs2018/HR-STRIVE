//angular imports
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';

//libs imports
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});

  readonly errorMessages: { [key: string]: string } = {
    required: 'This field is required!',
    minLength: 'Minimum length is 8 characters!',
    email: 'Please enter a valid email!',
    passwordsDoNotMatch: 'Passwords do not match!',
  };

  readonly lockIcon = faLock;
  readonly emailIcon = faEnvelope;

  get email(): AbstractControl | null | undefined {
    return this?.loginForm?.get('email');
  }

  get password(): AbstractControl | null | undefined {
    return this?.loginForm?.get('password');
  }

  get confirmPassword(): AbstractControl | null | undefined {
    return this?.loginForm?.get('confirmPassword');
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  //TODO: just a dummy implementation, will be replaced when auth process is in place
  public logIn(): void {
    this.router.navigate(['/home']);
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required, 
          Validators.email, 
          Validators.maxLength(255)
        ]
      ],
      /**
       * //TODO: add password regex validator for min 8 characters
       * - at least one number
       * - at least one special character
       * - at least one caplital letter
       */
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ]
      ],
      confirmPassword: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
          this.passwordsMatchValidator()
        ]
      ]
    });
  }

  //this can be improved and moved to a shared module if needed
  private passwordsMatchValidator(): ValidatorFn {
    return (): ValidationErrors | null => {
      return this.password?.value === this.confirmPassword?.value
        ? null
        : { passwordsDoNotMatch: true };
    };
  }

  onSubmit() { 

//     this.spinner.show();

//     this.authService.register(this.userRegistration)
//       .pipe(finalize(() => {
//         this.spinner.hide();
//       }))  
//       .subscribe(
//       result => {         
//          if(result) {
//            this.success = true;
//          }
//       },
//       error => {
//         this.error = error;       
//       });
}

}
