import { DomainModelMessage } from './MessagesClass';
import { MessagingService } from './messaging.service';
import { should } from "fuse-test-runner";

export class AppComponentTest {
  private messageService: MessagingService;

  constructor() {
    this.messageService = new MessagingService();
  }

  'Message Service should be defined and instance of Message service.'() {
    should(this.messageService).beOkay().beInstanceOf(MessagingService).beObject();
  }

  'should do something'() {
    var obj: object;
    var error: any;
    this.messageService.of(DomainModelMessage).subscribe(x => obj = x, e => error = e);

    should(obj).beUndefined()

    this.messageService.publish(new DomainModelMessage("3", { Id: '3', Name: '3' }, "3", "3"));

    should(obj).beOkay();
  }
}
