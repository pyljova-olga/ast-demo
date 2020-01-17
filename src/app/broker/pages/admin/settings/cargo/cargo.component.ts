import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: '[app-cargo]',
  templateUrl: './cargo.component.pug',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'flight-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/flight-up.svg'));
    iconRegistry.addSvgIcon(
        'flight-down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/flight-down.svg'));
  }

  ngOnInit() {
  }

}
