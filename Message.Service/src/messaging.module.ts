import { NgModule } from '@angular/core';
import { MessagingService } from './messaging.service';

@NgModule({
    providers: [MessagingService],
    exports: [MessagingService]
})
export class MessagingModule { }
