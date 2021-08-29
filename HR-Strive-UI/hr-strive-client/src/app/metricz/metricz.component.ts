import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metricz',
  templateUrl: './metricz.component.html',
  styleUrls: ['./metricz.component.scss']
})
export class MetriczComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userType: string = '';

}
