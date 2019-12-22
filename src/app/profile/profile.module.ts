import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../shared/shared.module';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ]
})
export class ProfileModule { }
