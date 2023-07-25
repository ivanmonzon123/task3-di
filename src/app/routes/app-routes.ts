import {Routes} from '@angular/router';
import {AppComponent} from '../app.component';

export const APP_ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'lazy', loadChildren: () => import('../lazy-loaded/lazy-loaded.module').then(module => module.LazyLoadedModule)},
]
