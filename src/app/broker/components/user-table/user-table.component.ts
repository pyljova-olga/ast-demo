import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[user-table]',
  templateUrl: './user-table.component.pug',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input()
  type = '';

  @Input()
  users: any[] = [];

  depositOpened = false;
  depositOpenedId = -1;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'trash-can',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/trash-can.svg'));
  }

  ngOnInit() {
  }

  openUserInfo(e) {
    e.preventDefault();
  }

  payMoney(e) {
    e.preventDefault()
  }

}
