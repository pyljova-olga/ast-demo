import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[app-trade]',
  templateUrl: './trade.component.pug',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  tradeForm = new FormGroup({
    isSolid: new FormControl(true)
  })
  tradeOpened = true;
  get isSolid(): any { return this.tradeForm.get('isSolid'); }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'reload',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/reload.svg'));

    iconRegistry.addSvgIcon(
        'filter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/filter.svg'));
  }

  ngOnInit() {

  }
  changeTradeType(e) {
    e.preventDefault()
  }
}
