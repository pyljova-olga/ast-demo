import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DdPanelComponent } from './components/ddpanel/ddpanel.component';
import { MaterialModule } from '../material.module';
import { NumberInputComponent } from './components/number-input/number-input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent,
    NumberInputComponent
  ],
  exports: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent,
    NumberInputComponent,
  ]
})
export class SharedModule { }
