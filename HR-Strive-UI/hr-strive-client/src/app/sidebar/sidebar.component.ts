import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  loadPage(pageName: string) {
    this.pageEvent.emit(pageName);
    return false;
  }

}
