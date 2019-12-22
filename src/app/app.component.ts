import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    const savedLang = localStorage.getItem('selectedLang');
    if(savedLang && this.isLangValid(savedLang)) {
      translate.use(savedLang);
    } else {
      const browserLang = translate.getBrowserLang();
      translate.use(this.isLangValid(browserLang) ? browserLang : 'en');
    }
  }

  isLangValid(lang: string) {
    return lang.match(/en|ru|es/);
  }
}
