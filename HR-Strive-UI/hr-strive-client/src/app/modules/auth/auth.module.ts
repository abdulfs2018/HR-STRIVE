//angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//libs imports
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxGridModule } from '@aposin/ng-aquila/grid';

//app imports
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NxButtonModule,
    NxGridModule
  ]
})
export class AuthModule { }
