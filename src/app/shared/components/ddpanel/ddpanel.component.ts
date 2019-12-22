import {Component, OnInit, Input, HostListener, Output, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: '[ddpanel]',
  templateUrl: './ddpanel.component.pug',
  styleUrls: ['./ddpanel.component.scss']
})
export class DdPanelComponent implements OnInit {
  @Input() showArrow = true;
  @Input() showEvent = 'hover';
  @Input() isOpened = false;
  @Output() isOpenedChange = new EventEmitter<boolean>();
  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside && this.isOpened) {
      this.toggle();
    }
    this.wasInside = false;
  }
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

  toggle() {
    if(this.showEvent === 'click') {
      this.isOpened = !this.isOpened;
      this.isOpenedChange.emit(this.isOpened);
    }
  }

}
