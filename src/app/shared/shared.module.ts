import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DdPanelComponent } from './components/ddpanel/ddpanel.component';
import { NumberFormat } from './pipes/numberFormat';
import { MaterialModule } from '../material.module';
import { NumberInputComponent } from './components/number-input/number-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TradeTableTheadComponent } from './components/trade-table/trade-table-thead/trade-table-thead.component';
import { TradeTableTrComponent } from './components/trade-table/trade-table-tr/trade-table-tr.component';
import { TradeMixedTableTheadComponent } from './components/trade-table/trade-mixed-table-thead/trade-mixed-table-thead.component';
import { TradeMixedTableTrComponent } from './components/trade-table/trade-mixed-table-tr/trade-mixed-table-tr.component';
import { RightModalComponent } from './components/right-modal/right-modal.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartPlantationComponent } from './components/cart-plantation/cart-plantation.component';
import { CartOrderHeaderComponent } from './components/cart-order-header/cart-order-header.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent,
    NumberInputComponent,
    NumberFormat,
    TradeTableTheadComponent,
    TradeTableTrComponent,
    TradeMixedTableTheadComponent,
    TradeMixedTableTrComponent,
    RightModalComponent,
    AddToCartComponent,
    CartItemComponent,
    CartPlantationComponent,
    CartOrderHeaderComponent
  ],
  exports: [
    HeaderComponent,
    CalendarComponent,
    DdPanelComponent,
    NumberInputComponent,
    NumberFormat,
    TradeTableTheadComponent,
    TradeTableTrComponent,
    TradeMixedTableTheadComponent,
    TradeMixedTableTrComponent,
    RightModalComponent,
    AddToCartComponent,
    CartItemComponent,
    CartPlantationComponent,
    CartOrderHeaderComponent
  ]
})
export class SharedModule { }
