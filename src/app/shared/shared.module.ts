import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DdPanelComponent } from './components/ddpanel/ddpanel.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent
  ],
  exports: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent,
  ]
})
export class SharedModule { }
