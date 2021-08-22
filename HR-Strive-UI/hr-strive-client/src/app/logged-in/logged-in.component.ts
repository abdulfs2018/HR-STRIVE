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
    this.example = state?.example;
  }

  ngOnInit(): void {

    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  
    });

  }

  // tracks which component to load and userType will come from logged in API call object in the future
  // this userType is passed to each component page child to render relevant information to the user based on role
  // userRole: standard, admin or topLevelAdmin
  tabIndex: number = 0;
  userType: string = 'topLevelAdmin';

  pageEvent(id: number): void {
    this.tabIndex = id;
  }

}
