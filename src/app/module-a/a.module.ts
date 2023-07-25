import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AService} from './services/a.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AService
  ]
})
export class AModule { }
