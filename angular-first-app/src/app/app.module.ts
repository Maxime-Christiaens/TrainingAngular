import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AppareilsComponent } from './appareils/appareils.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    AppareilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
