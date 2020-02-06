import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppTrainingComponent} from './training/app.training.component';
import {AppDashboardComponent} from "./dashboard/app.dashboard.component";
import {CoinValueChartComponent} from "./coin-value-chart/coin-value-chart.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: AppDashboardComponent},
  {path: 'training/:projectId', component: AppTrainingComponent},
  {path: 'coinValueChart', component: CoinValueChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
