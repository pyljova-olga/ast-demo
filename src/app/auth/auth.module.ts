import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import {TranslateModule} from '@ngx-translate/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RestoreComponent } from './pages/restore/restore.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }, {
        path: 'registration',
        component: RegisterComponent
      }, {
        path: 'restore',
        component: RestoreComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, RestoreComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule
  ]
})
export class AuthModule { }
