import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

   // tracks which component to load and userType will come from logged in API call object in the future
  // this userType is passed to each component page child to render relevant information to the user based on role
  // userRole: standard, admin or topLevelAdmin
  userType: string = 'topLevelAdmin';
  example: string;
  
  @ViewChild('sidebarContainer', {read : ViewContainerRef}) sidebarContainer!: ViewContainerRef;
  @ViewChild('componentContainer', {read : ViewContainerRef}) componentContainer!: ViewContainerRef;

  constructor(private router: Router, private cfr: ComponentFactoryResolver, private injector: Injector) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {example: string};
    this.example = state?.example;
  
  }

  ngOnInit(): void {
    this.loadComponent('Sidebar');
    this.loadComponent('Dashboard');
  }

  async loadComponent(componentName: string): Promise<void> {

    if(this.componentContainer?.length > 0) {
      this.componentContainer.remove();
    }

    switch(componentName) {
      case 'Sidebar':
        const {SidebarComponent} = await import("../sidebar/sidebar.component");
        const sidebarFactory = this.cfr.resolveComponentFactory(SidebarComponent);
        const {instance} = this.sidebarContainer.createComponent(sidebarFactory, undefined, this.injector);
        instance.pageEvent.pipe().subscribe((event) => this.loadComponent(event));
        break;
      case 'Holiday Calendar':
        const {HolidayCalendarComponent} = await import("../holiday-calendar/holiday-calendar.component");
        const holidayCalendarFactory = this.cfr.resolveComponentFactory(HolidayCalendarComponent);
        this.componentContainer.createComponent(holidayCalendarFactory, undefined, this.injector);
        break;
      case 'Timesheet':
        const {TimesheetComponent} = await import("../timesheet/timesheet.component");
        const timesheetFactory = this.cfr.resolveComponentFactory(TimesheetComponent);
        this.componentContainer.createComponent(timesheetFactory, undefined, this.injector);
        break;
      case 'Metricz':
        const {MetriczComponent} = await import("../metricz/metricz.component");
        const metriczFactory = this.cfr.resolveComponentFactory(MetriczComponent);
        this.componentContainer.createComponent(metriczFactory, undefined, this.injector);
        break;
      case 'Holiday Form':
        const {HolidayFormComponent} = await import("../holiday-form/holiday-form.component");
        const holidayFormFactory = this.cfr.resolveComponentFactory(HolidayFormComponent);
        this.componentContainer.createComponent(holidayFormFactory, undefined, this.injector);
        break;
      case 'Book Holiday':
        const {BookHolidayComponent} = await import("../book-holiday/book-holiday.component");
        const bookHolidayFactory = this.cfr.resolveComponentFactory(BookHolidayComponent);
        this.componentContainer.createComponent(bookHolidayFactory, undefined, this.injector);
        break;
      case 'Users':
        const {UsersComponent} = await import("../users/users.component");
        const usersFactory = this.cfr.resolveComponentFactory(UsersComponent);
        this.componentContainer.createComponent(usersFactory, undefined, this.injector);
        break;
      case 'Dashboard':
      default:
        const {DashboardComponent} = await import("../dashboard/dashboard.component");
        const dashboardFactory = this.cfr.resolveComponentFactory(DashboardComponent);
        this.componentContainer.createComponent(dashboardFactory, undefined, this.injector);
        break;
    }


  }

}
