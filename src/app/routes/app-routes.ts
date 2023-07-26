import {Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {FirstAppComponent} from '../components/first-app/first-app.component';

export const APP_ROUTES: Routes = [
  {path: '', component: FirstAppComponent},
  {path: 'lazy', loadChildren: () => import('../lazy-loaded/lazy-loaded.module').then(module => module.LazyLoadedModule)},
]
