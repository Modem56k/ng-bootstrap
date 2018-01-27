import HomeComponent from './areas/home/home.component';
import SampleComponent from './areas/sample/sample.component';
import SampleChangeComponent from './SampleChange/sample.component';

/** States */
export const HomeState = { name: 'home', url: '/home', component: HomeComponent };
export const SampleState = { name: 'sample', url: '/sample', component: SampleComponent };
export const SampleChange = { name: 'change', url: '/change', component: SampleChangeComponent }
