import { Component, OnInit } from '@angular/core';
import { IPerson } from 'host-models';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private person: IPerson;

  constructor() { }

  ngOnInit() {
  }

}
