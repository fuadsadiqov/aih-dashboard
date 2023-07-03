import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
// Angular Material Icon
import { MatIconModule } from '@angular/material/icon';
// Components
import { HeaderComponent } from '../components/header/header.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { TradeComponent } from '../views/dashboard/trade/trade.component';
import { OperationalComponent } from '../views/dashboard/operational/operational.component';
import { CreditorComponent } from '../views/dashboard/creditor/creditor.component';
import { RollingStockComponent } from '../views/dashboard/rolling-stock/rolling-stock.component';
import { RemainingDebtComponent } from '../views/dashboard/remaining-debt/remaining-debt.component';
import { RevenueBreakdownComponent } from '../views/dashboard/revenue-breakdown/revenue-breakdown.component';
import { CashComponent } from '../views/dashboard/operational/cash/cash.component';
import { PieChartComponent } from '../constants/pie-chart/pie-chart.component';
import { BarChartComponent } from '../constants/bar-chart/bar-chart.component';
import { SupervisoryBoardComponent } from '../views/supervisory-board/supervisory-board.component';
import { StatementsComponent } from '../views/statements/statements.component';
import { DiagnosticsComponent } from '../views/diagnostics/diagnostics.component';
import { ActionPlanComponent } from '../views/action-plan/action-plan.component'

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'supervisory-board', component: SupervisoryBoardComponent},
  { path: 'statements', component: StatementsComponent},
  { path: 'diagnostics', component: DiagnosticsComponent},
  { path: 'action-plan', component: ActionPlanComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TradeComponent,
    OperationalComponent,
    CreditorComponent,
    RollingStockComponent,
    RemainingDebtComponent,
    RevenueBreakdownComponent,
    CashComponent,
    PieChartComponent,
    BarChartComponent,
    SupervisoryBoardComponent,
    StatementsComponent,
    DiagnosticsComponent,
    ActionPlanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
