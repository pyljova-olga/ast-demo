import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-requests',
  templateUrl: './requests.component.pug',
  styleUrls: ['./requests.component.scss']
})
export class CatalogRequestsComponent implements OnInit {
  t = [{
    id: 1,
    st: [{id: 1}, {id: 2}, {id: 3}]
  },{
    id: 2,
    st: [{id: 5}, {id: 4}, {id: 6}]
  },{
    id: 3,
    st: [{id: 7}, {id: 8}, {id: 9}]
  },{
    id: 4,
    st: [{id: 10}, {id: 11}, {id: 13}]
  }];
  openedTId = -1;
  openedSTId = -1;
  constructor() { }

  ngOnInit() {
  }

}
