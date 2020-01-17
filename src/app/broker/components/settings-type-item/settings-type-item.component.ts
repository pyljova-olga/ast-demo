import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[settings-type-item]',
  templateUrl: './settings-type-item.component.pug',
  styleUrls: ['./settings-type-item.component.scss']
})
export class SettingsTypeItemComponent implements OnInit {
  @Input()
  isOpened = false;
  @Input()
  type = '';

  @Output()
  delete = new EventEmitter();
  @Output()
  change = new EventEmitter();
  @Output()
  toggle = new EventEmitter();

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

  toggleItem(e) {
    e.preventDefault();
    this.toggle.emit();
  }

}
