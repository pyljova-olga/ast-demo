import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PlantationComponent } from './plantation.component';
import { StorageComponent } from './pages/storage/storage.component';
import { AssosiationsComponent } from './pages/storage/assosiations/assosiations.component';
import { SettingsComponent } from './pages/storage/settings/settings.component';
import { PriceComponent } from './pages/storage/price/price.component';
import { SalesComponent } from './pages/sales/sales.component';
import { HistoryComponent } from './pages/sales/history/history.component';
import { ClaimsComponent } from './pages/sales/claims/claims.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestComponent } from './pages/requests/request/request.component';
import { TradeComponent } from './pages/trade/trade.component';
import { OrdersComponent } from './pages/trade/orders/orders.component';
import { AuctionComponent } from './pages/trade/auction/auction.component';
import {SharedModule} from '../shared/shared.module';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  {
    path: '',
    component: PlantationComponent,
    children: [
      {
        path: 'storage',
        component: StorageComponent,
        children: [
          {
            path: 'assosiations',
            component: AssosiationsComponent
          }, {
            path: 'settings',
            component: SettingsComponent
          }, {
            path: 'price',
            component: PriceComponent
          }, {
            path: '',
            redirectTo: 'assosiations',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'trade',
        component: TradeComponent,
        children: [
          {
            path: 'auction',
            component: AuctionComponent
          }, {
            path: 'orders',
            component: OrdersComponent
          }, {
            path: '',
            redirectTo: 'auction',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'sales',
        component: TradeComponent,
        children: [
          {
            path: 'claims',
            component: ClaimsComponent
          }, {
            path: 'history',
            component: HistoryComponent
          }, {
            path: '',
            redirectTo: 'history',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'requests',
        component: RequestsComponent,
      }, {
        path: 'request/:id',
        component: RequestComponent,
      }, {
        path: '',
        redirectTo: 'storage/assosiations',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [PlantationComponent, StorageComponent, AssosiationsComponent, SettingsComponent, PriceComponent, SalesComponent, HistoryComponent, ClaimsComponent, RequestsComponent, RequestComponent, TradeComponent, OrdersComponent, AuctionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class PlantationModule { }
