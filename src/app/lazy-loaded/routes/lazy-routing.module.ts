import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LAZY_ROUTES} from './lazy-routes';


@NgModule({
  imports: [RouterModule.forChild(LAZY_ROUTES)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
