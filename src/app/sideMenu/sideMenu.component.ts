import { OnInit, Component } from '@angular/core';
import * as messages from '../../model/MessageServiceClass';
import { MessagingService } from './../../services/messaging.service';

@Component({
  selector: 'sideMenu',
  templateUrl: './sideMenu.component.html',
})
export default class SideMenuComponent implements OnInit {
  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.messagingService.of(messages.ProcedureUpdateNameOnClientRequestMessage)
      .subscribe(this.updateNameOnClientRequestHandle.bind(this),
      this._genericErrorHandler.bind(this)
      );

    this.messagingService.of(messages.CatMessage)
      .subscribe(this.updateNameOnClientRequestHandle.bind(this),
      this._genericErrorHandler.bind(this));
  }

  updateNameOnClientRequestHandle(data: any) {
    console.log(JSON.stringify(data));
  }

  _genericErrorHandler(data: any) {
    console.error(`Error Encountered: ${JSON.stringify(data)}`);
  }
}
