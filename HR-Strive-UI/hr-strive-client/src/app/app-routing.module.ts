import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'logged-in', component: LoggedInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
