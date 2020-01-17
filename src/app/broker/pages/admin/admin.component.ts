import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[app-admin]',
  templateUrl: './admin.component.pug',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'menu-activity',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/broker-admin-menu-activity.svg'));
    iconRegistry.addSvgIcon(
        'menu-catalog',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/broker-admin-menu-catalog.svg'));
    iconRegistry.addSvgIcon(
        'menu-content',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/broker-admin-menu-content.svg'));
    iconRegistry.addSvgIcon(
        'menu-settings',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/broker-admin-menu-settings.svg'));
    iconRegistry.addSvgIcon(
        'menu-users',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/broker-admin-menu-users.svg'));
  }

  ngOnInit() {
  }

}
