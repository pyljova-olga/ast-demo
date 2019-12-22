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
  private isLangPanelOpened = false;
  private langsList = ['en', 'ru', 'es'];
  private url = '';
  private subscription: Subscription;

  constructor(private translate: TranslateService,
              private router: Router) {
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
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
