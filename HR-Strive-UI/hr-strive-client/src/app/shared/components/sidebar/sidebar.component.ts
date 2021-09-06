import { NavbarItem } from './../../../core/models/navbar-item';

import { ChangeDetectionStrategy, Component } from '@angular/core';

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

  //TODO: use real routes here
  readonly navItems: NavbarItem[] = [
    {
      icon: faTasks,
      label: 'Dashboard',
      url: '/',
    },
    {
      icon: faCalendarAlt,
      label: 'Book Holiday',
      url: '/',
    },
    {
      icon: faPlane,
      label: 'Holiday Form',
      url: '/',
    },
    {
      icon: faCalculator,
      label: 'Metricz',
      url: '/',
    },
    {
      icon: faClock,
      label: 'Timesheet',
      url: '/',
    },
    {
      icon: faUserTie,
      label: 'Users',
      url: '/',
    },
  ];
}
