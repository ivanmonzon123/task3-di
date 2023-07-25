import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyLoadedComponent} from './lazy-loaded.component';
import {LazyRoutingModule} from './routes/lazy-routing.module';
import {LazyService} from './service/lazy.service';




@NgModule({
  declarations: [
    LazyLoadedComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    LazyService
  ]
})
export class LazyLoadedModule { }
