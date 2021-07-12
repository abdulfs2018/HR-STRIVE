import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  example: string;

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {example: string};
    this.example = state.example;
  }

  ngOnInit(): void {
  }

}
