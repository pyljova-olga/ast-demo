import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[cart-plantation]',
  templateUrl: './cart-plantation.component.pug',
  styleUrls: ['./cart-plantation.component.scss']
})
export class CartPlantationComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'minus-in-circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/minus-in-circle.svg'));
    iconRegistry.addSvgIcon(
        'plus-in-circle',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/plus-in-circle.svg'));
  }

  ngOnInit() {
  }

}
