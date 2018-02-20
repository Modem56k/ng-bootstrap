import { NgModule } from '@angular/core';
import { StorageService } from 'storage.service';

@NgModule({
    providers: [StorageService],
    exports: [StorageService]
})
export class StorageModule {
}