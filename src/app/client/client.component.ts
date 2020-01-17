import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-client]',
  templateUrl: './client.component.pug',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
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
      link: '#',
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
