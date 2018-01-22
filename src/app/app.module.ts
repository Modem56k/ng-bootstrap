import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MaterialDesignModule } from './material.module';
import SideMenuComponent from './sideMenu/sideMenu.component';
import { MessagingService } from '../services/messaging.service';
import SampleComponent from './SampleChange/sample.component';

@NgModule({
  declarations: [AppComponent, SideMenuComponent, SampleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
