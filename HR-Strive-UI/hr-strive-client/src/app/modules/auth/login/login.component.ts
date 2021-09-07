//angular imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //TODO: just a dummy implementation, will be replaced when auth process is in place
  public logIn(): void {
    this.router.navigate(['/home']);
  }

}
