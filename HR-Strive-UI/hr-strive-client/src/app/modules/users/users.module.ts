//angumar imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//app imports
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
