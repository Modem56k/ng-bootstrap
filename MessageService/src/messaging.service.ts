import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

interface Message {
    channel: Function;
    content: any;
}

@Injectable()
export class MessagingService {
    private message$: Subject<Message>

    constructor() {
        this.message$ = new Subject<Message>();
    }

    Add<T>(item: T) {
      return item.constructor.name;
    }

    public publish<T>(message: T): void {
        const channel = message.constructor;
        this.message$.next({ channel: channel, content: message });
    }

    public of<T>(messageType: { new(...args: any[]): T }): Observable<T> {
        const channel = messageType;
        return this.message$.filter(message => message.channel === channel)
            .map(message => message.content);
    }
}
