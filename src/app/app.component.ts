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
  constructor() { }

  ngOnInit() {
    this.links.push({ Name: 'Home', Icon: 'home', Route: '#' });
    this.links.push({ Name: 'Payroll', Icon: 'account_balance', Route: '#' });
    this.links.push({ Name: 'Cash', Icon: 'Cat', Route: '#' });
    this.links.push({ Name: 'Cash', Icon: 'Cat', Route: '#' });
  }

}

class Link {
  public Name: string;
  public Icon: string;
  public Route: string;
}
