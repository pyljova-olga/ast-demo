import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BrokerComponent } from './broker.component';
import { TradeComponent } from './pages/trade/trade.component';
import { HistoryComponent } from './pages/trade/history/history.component';
import { OrdersComponent } from './pages/trade/orders/orders.component';
import { AuctionComponent } from './pages/trade/auction/auction.component';
import { PaidComponent } from './pages/trade/orders/paid/paid.component';
import { ShippedComponent } from './pages/trade/orders/shipped/shipped.component';
import { ClaimsComponent } from './pages/trade/orders/claims/claims.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { CatalogComponent } from './pages/admin/catalog/catalog.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { BasicComponent } from './pages/admin/settings/basic/basic.component';
import { CargoComponent } from './pages/admin/settings/cargo/cargo.component';
import { BannerComponent } from './pages/admin/content/banner/banner.component';
import { NewsComponent } from './pages/admin/content/news/news.component';
import { SalesComponent } from './pages/admin/content/sales/sales.component';
import { MessagesComponent } from './pages/admin/content/messages/messages.component';
import { FaqComponent } from './pages/admin/content/faq/faq.component';
import { ListComponent } from './pages/admin/catalog/list/list.component';
import { CatalogRequestsComponent } from './pages/admin/catalog/requests/requests.component';
import { UsersBrokerComponent } from './pages/admin/users/broker/broker.component';
import { ClientsComponent } from './pages/admin/users/clients/clients.component';
import { PlantationsComponent } from './pages/admin/users/plantations/plantations.component';
import { RequestComponent } from './pages/admin/users/requests/request/request.component';
import { RequestsComponent } from './pages/admin/users/requests/requests.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BrokerComponent,
    children: [
      {
        path: 'trade',
        component: TradeComponent,
        children: [
          {
            path: 'auction',
            component: AuctionComponent
          }, {
            path: 'history',
            component: HistoryComponent
          }, {
            path: 'orders',
            component: OrdersComponent,
            children: [
              {
                path: 'claims',
                component: ClaimsComponent
              }, {
                path: 'paid',
                component: PaidComponent
              }, {
                path: 'shipped',
                component: ShippedComponent
              }, {
                path: '',
                redirectTo: 'paid',
                pathMatch: 'full'
              }
            ]
          }, {
            path: '',
            redirectTo: 'history',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'catalog',
            component: CatalogComponent,
            children: [
              {
                path: 'list',
                component: ListComponent
              }, {
                path: 'requests',
                component: CatalogRequestsComponent
              }, {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
              }
            ]
          }, {
            path: 'content',
            component: ContentComponent,
            children: [
              {
                path: 'banner',
                component: BannerComponent
              }, {
                path: 'faq',
                component: FaqComponent
              }, {
                path: 'messages',
                component: MessagesComponent
              }, {
                path: 'news',
                component: NewsComponent
              }, {
                path: 'sales',
                component: SalesComponent
              }, {
                path: '',
                redirectTo: 'banner',
                pathMatch: 'full'
              }
            ]
          }, {
            path: 'settings',
            component: SettingsComponent,
            children: [
              {
                path: 'basic',
                component: BasicComponent
              }, {
                path: 'cargo',
                component: CargoComponent
              }, {
                path: '',
                redirectTo: 'basic',
                pathMatch: 'full'
              }
            ]
          }, {
            path: 'users',
            component: UsersComponent,
            children: [
              {
                path: 'broker',
                component: UsersBrokerComponent
              }, {
                path: 'clients',
                component: ClientsComponent
              }, {
                path: 'plantations',
                component: PlantationsComponent
              }, {
                path: 'requests',
                component: RequestsComponent
              }, {
                path: 'request/:id',
                component: RequestComponent
              }, {
                path: '',
                redirectTo: 'clients',
                pathMatch: 'full'
              }
            ]
          }, {
            path: '',
            redirectTo: 'catalog',
            pathMatch: 'full'
          }
        ]
      }, {
        path: '',
        redirectTo: 'trade/history',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [UsersBrokerComponent, BrokerComponent, TradeComponent, HistoryComponent, OrdersComponent, AuctionComponent, PaidComponent, ShippedComponent, ClaimsComponent, AdminComponent, SettingsComponent, ContentComponent, CatalogComponent, UsersComponent, BasicComponent, CargoComponent, BannerComponent, NewsComponent, SalesComponent, MessagesComponent, FaqComponent, ListComponent, CatalogRequestsComponent, ClientsComponent, PlantationsComponent, RequestComponent, RequestsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class BrokerModule { }
