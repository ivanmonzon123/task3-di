import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AService} from './services/a.service';
import { FirstAComponent } from './components/first-a/first-a.component';



@NgModule({
  declarations: [
    FirstAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstAComponent
  ],
  providers: [
    AService
  ]
})
export class AModule { }
