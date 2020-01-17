import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[common-header]',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  menuLinks: {
    link: string,
    text: string,
    notification?: string
  }[];

  @Input()
  userLinks: {
    link: string,
    text: string
  }[];

  @Input()
  deposit: number;

  @Input()
  notifications: number;

  @Input()
  user: any; // later will use user instance

  isUserPanelOpened: boolean = false;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
        'keyboard_arrow_up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));
    iconRegistry.addSvgIcon(
        'notification',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/notification.svg'));
    iconRegistry.addSvgIcon(
        'wallet',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/wallet.svg'));
  }

  ngOnInit() {
  }

  logout(e) {
    e.preventDefault();
    // TODO: logout
  }

}
