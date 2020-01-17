import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[cart-item]',
  templateUrl: './cart-item.component.pug',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  status = '';

  @Input()
  proposition = ''
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'trash-can',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/trash-can.svg'));
  }


  ngOnInit() {
  }

  discussPrice(e) {
    e.preventDefault();
  }

}
