import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[right-modal]',
  templateUrl: './right-modal.component.pug',
  styleUrls: ['./right-modal.component.scss']
})
export class RightModalComponent implements OnInit {
  @Output()
  close = new EventEmitter();

  @Input()
  isClosable = true

  @Input()
  titleText = ''

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/close.svg'));
  }

  ngOnInit() {
  }

  closeModal() {
    if(this.isClosable) {
      this.close.emit();
    }
  }

}
