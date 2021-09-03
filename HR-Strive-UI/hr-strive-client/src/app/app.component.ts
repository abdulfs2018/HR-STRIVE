import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /** Returns current year, e.g. 2019, 2020. */
    readonly currentYear: number = new Date().getFullYear();
}
