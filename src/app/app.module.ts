import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { InflowComponent } from '../views/dashboard/operational/inflow/inflow.component';
import { OutflowComponent } from '../views/dashboard/operational/outflow/outflow.component';
import { CargoComponent } from '../views/dashboard/revenue-breakdown/cargo/cargo.component';
import { PassangerComponent } from '../views/dashboard/revenue-breakdown/passanger/passanger.component';
import { OtherComponent } from '../views/dashboard/revenue-breakdown/other/other.component'

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
    InflowComponent,
    OutflowComponent,
    CargoComponent,
    PassangerComponent,
    OtherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
