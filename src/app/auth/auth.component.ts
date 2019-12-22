import { Component, OnInit } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {Subscription} from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.pug',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private url = '';
  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
