import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyService} from './service/lazy.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LazyService
  ]
})
export class LazyLoadedModule { }
