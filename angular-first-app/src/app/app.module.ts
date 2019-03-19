import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompoComponent } from './first-compo/first-compo.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { WarhammerComponent } from './warhammer/warhammer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompoComponent,
    AppareilsComponent,
    WarhammerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 