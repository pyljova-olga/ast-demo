import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[cart-order-header]',
  templateUrl: './cart-order-header.component.pug',
  styleUrls: ['./cart-order-header.component.scss']
})
export class CartOrderHeaderComponent implements OnInit {
  @Input()
  isOpen = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
        'keyboard_arrow_up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));
  }

  ngOnInit() {
  }

}
