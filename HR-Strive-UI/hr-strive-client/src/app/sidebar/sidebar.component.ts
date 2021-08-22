import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  loadPage(id: number) {
    this.pageEvent.emit(id);
    return false;
  }

}
