import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestServiceService } from "./services/test-service.service";
import { TestouilleComponent } from './testouille/testouille.component';
import { Routes, RouterModule } from '@angular/router';
import { WarhammerComponent } from './warhammer/warhammer.component';

const routes: Routes = [
  { path: 'testouille', component: TestouilleComponent },
  { path: '', component: AppComponent},
  { path: 'warhammer', component: WarhammerComponent}
  //{ ath: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export class FeatureRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    TestouilleComponent,
    WarhammerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
