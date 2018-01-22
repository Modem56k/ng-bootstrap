import { Component } from '@angular/core';
import { IDomainModel } from './../../model/domain';
import { MessagingService } from './../../services/messaging.service';
import * as messages from '../../model/MessageServiceClass';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html'
})
export default class SampleComponent {
    id: any = 3;
    newValue: any = 3;
    _name: any = 3;

    constructor(private messagingService: MessagingService) { }

    publish() {
        const newValue = Math.random();
        const n = new SampleModel();
        n.Name = 'Cat';

        this.messagingService.publish(new messages.ProcedureUpdateNameOnClientRequestMessage(this.id, n, newValue, this._name));
    }

    publishSecond() {
        let newValue = Math.random();
        let n = new SampleModel();
        n.Name = 'Dog';

        this.messagingService.publish(new messages.CatMessage(this.id, n, newValue, this._name));
    }
}


class SampleModel implements IDomainModel {
    Name: string;
}
