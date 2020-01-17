import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[settings-sub-type-item]',
  templateUrl: './settings-sub-type-item.component.pug',
  styleUrls: ['./settings-sub-type-item.component.scss']
})
export class SettingsSubTypeItemComponent implements OnInit {
  @Input()
  isOpened = false;
  @Input()
  type = '';

  @Output()
  deactivate = new EventEmitter();
  @Output()
  toggle = new EventEmitter();
  @Output()
  delete = new EventEmitter();
  @Output()
  change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleItem() {
    this.toggle.emit();
  }

}
