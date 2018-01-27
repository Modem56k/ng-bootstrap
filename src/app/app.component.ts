import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public opened: boolean;
  public links: Array<Link> = [];
  public title = 'My App';
  constructor() { }

  ngOnInit() {
    this.links.push({ Name: 'Home', Icon: 'home', Route: 'home' });
    this.links.push({ Name: 'Payroll', Icon: 'account_balance', Route: 'sample' });
    this.links.push({ Name: 'Change', Icon: 'bookmark', Route: 'change' });
    this.links.push({ Name: 'Cash', Icon: 'class', Route: '#' });
  }

}

class Link {
  public Name: string;
  public Icon: string;
  public Route: string;
}
