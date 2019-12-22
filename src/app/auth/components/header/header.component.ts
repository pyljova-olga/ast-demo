import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationEnd, Router, Event} from '@angular/router';
import {Subscription} from 'rxjs';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: '[auth-header]',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLangPanelOpened = false;
  langsList = ['en', 'ru', 'es'];
  url = '';
  private subscription: Subscription;

  constructor(public translate: TranslateService,
              private router: Router) {
    this.url = this.router.url;
    console.log(this.url);
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        console.log(this.url, '2');
      }
    });
  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

  changeLang(lang) {
    this.isLangPanelOpened = false;
    this.translate.use(lang);
    localStorage.setItem('selectedLang', lang);
  }

}
