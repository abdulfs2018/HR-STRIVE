//angular imports
import { ChangeDetectionStrategy, Component } from '@angular/core';

//app imports
import { NavbarItem } from './../../../core/models/navbar-item';

//libs imports
import {
  faUserTie,
  faTasks,
  faCalendarAlt,
  faClock,
  faCalculator,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {


  readonly navItems: NavbarItem[] = [
    {
      icon: faTasks,
      label: 'Dashboard',
      url: '/dashboard',
    },
    {
      icon: faCalendarAlt,
      label: 'Book Holiday',
      url: '/holiday/book-holiday',
    },
    {
      icon: faPlane,
      label: 'Holiday Form',
      url: '/holiday/holiday-form',
    },
    {
      icon: faCalculator,
      label: 'Metricz',
      url: '/metricz',
    },
    {
      icon: faClock,
      label: 'Timesheet',
      url: '/timesheet',
    },
    {
      icon: faUserTie,
      label: 'Users',
      url: '/',
    },
  ];
}
