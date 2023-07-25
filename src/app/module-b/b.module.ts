import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstBComponent } from './components/first-b/first-b.component';



@NgModule({
  declarations: [
    FirstBComponent
  ],
  exports: [
    FirstBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BModule { }
