import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar/leftsidebar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { DataCardsComponent } from './components/data-cards/data-cards/data-cards.component';
import { NewusersComponent } from './components/newusers/newusers/newusers.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders/recent-orders.component';
import { TopCardsService } from './services/top-cards/top-cards.service';
import { RecentOrdersService } from './services/recent-orders/recent-orders.service';
import { NewUsersService } from './services/new-users/new-users.service';
import { CommonModule } from '@angular/common';
import { SalesChartComponent } from './components/sales-chart/sales-chart/sales-chart.component';
import { BalanceChartComponent } from './components/balance-chart/balance-chart/balance-chart.component';
import { ProductChartComponent } from './components/product-chart/product-chart/product-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftsidebarComponent,
    HeaderComponent,
    DataCardsComponent,
    NewusersComponent,
    RecentOrdersComponent,
    SalesChartComponent,
    BalanceChartComponent,
    ProductChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TopCardsService,RecentOrdersService,NewUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
