import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.pug',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  isModalLengthsOpened = false;

  constructor() { }

  ngOnInit() {
  }

}
