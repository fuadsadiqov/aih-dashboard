import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from '../app.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { MainComponent } from './main/main.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { TradeComponent } from './trade/trade.component';
import { OperationalComponent } from './operational/operational.component';
import { CreditorComponent } from './creditor/creditor.component';
import { RollingStockComponent } from './rolling-stock/rolling-stock.component';
import { RemainingDebtComponent } from './remaining-debt/remaining-debt.component';
import { RevenueBreakdownComponent } from './revenue-breakdown/revenue-breakdown.component';
import { CashComponent } from './operational/cash/cash.component';
import { InflowComponent } from './operational/inflow/inflow.component';
import { OutflowComponent } from './operational/outflow/outflow.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,
    MainComponent,
    TradeComponent,
    OperationalComponent,
    CreditorComponent,
    RollingStockComponent,
    RemainingDebtComponent,
    RevenueBreakdownComponent,
    CashComponent,
    InflowComponent,
    OutflowComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatIconModule,
  ]
})
export class ChartModule { }