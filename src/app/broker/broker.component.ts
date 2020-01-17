import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-broker]',
  templateUrl: './broker.component.pug',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {
  userLinks = [
    {
      link: '#',
      text: 'Личная страница'
    },
    {
      link: '#',
      text: 'FAQ'
    },
    {
      link: '/broker/admin/users/clients',
      text: 'Администрирование'
    }
  ];
  menuLinks = [
    {
      link: '#',
      text: 'Торги'
    },
    {
      link: '#',
      text: 'Отложенные заявки',
      notification: '2'
    },
    {
      link: '#',
      text: 'Мои покупки'
    },
    {
      link: '#',
      text: 'Новости и акции'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
