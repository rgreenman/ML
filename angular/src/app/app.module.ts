import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppTrainingComponent} from './training/app.training.component';
import {AppCreateProjectComponent} from './create-project/app.create-project.component';
import {AppDeleteProjectComponent} from "./delete-project/app.delete-project.component";
import {AppDashboardComponent} from "./dashboard/app.dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AppTrainingComponent,
    AppDashboardComponent,
    AppCreateProjectComponent,
    AppDeleteProjectComponent
  ],
  entryComponents: [
    AppCreateProjectComponent,
    AppDeleteProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
