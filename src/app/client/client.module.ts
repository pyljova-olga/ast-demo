import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { TradeComponent } from './pages/trade/trade.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ActivitiesComponent } from './pages/admin/activities/activities.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { ActiveComponent } from './pages/purchases/active/active.component';
import { ArchiveComponent } from './pages/purchases/archive/archive.component';
import { ClaimsComponent } from './pages/purchases/claims/claims.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RequestComponent } from './pages/requests/request/request.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'trade',
        component: TradeComponent
      }, {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'users',
            component: UsersComponent
          }, {
            path: 'activities',
            component: ActivitiesComponent
          }, {
            path: '',
            redirectTo: 'users',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'purchases',
        component: PurchasesComponent,
        children: [
          {
            path: 'active',
            component: ActiveComponent
          }, {
            path: 'archive',
            component: ArchiveComponent
          }, {
            path: 'claims',
            component: ClaimsComponent
          }, {
            path: '',
            redirectTo: 'active',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'requests',
        component: RequestsComponent,
      }, {
        path: 'requests/:id',
        component: RequestComponent,
      }, {
        path: '',
        redirectTo: 'trade',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [ClientComponent, TradeComponent, AdminComponent, UsersComponent, ActivitiesComponent, PurchasesComponent, ActiveComponent, ArchiveComponent, ClaimsComponent, RequestsComponent, RequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class ClientModule { }
