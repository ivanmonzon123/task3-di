import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import {AModule} from './module-a/a.module';
import {BModule} from './module-b/b.module';
import { FirstAppComponent } from './components/first-app/first-app.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule,
    BModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
