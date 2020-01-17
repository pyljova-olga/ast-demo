import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[trade-mixed-table-tr]',
  templateUrl: './trade-mixed-table-tr.component.pug',
  styleUrls: ['./trade-mixed-table-tr.component.scss']
})
export class TradeMixedTableTrComponent implements OnInit {
  isCartOpened: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'cart',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/cart.svg'));

    iconRegistry.addSvgIcon(
        'lock',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/lock.svg'));

    iconRegistry.addSvgIcon(
        'unlock',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/unlock.svg'));
  }

  ngOnInit() {
  }

}
