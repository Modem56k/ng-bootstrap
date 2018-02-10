import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { should } from 'fuse-test-runner';
import { AppComponent } from './app.component';

export class AppComponentTest {
  'Should be okay'() {
    should(AppComponent).beOkay().beObject()
  }
}
