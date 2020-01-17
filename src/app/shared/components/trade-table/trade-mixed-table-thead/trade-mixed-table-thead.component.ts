import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[trade-mixed-table-thead]',
  templateUrl: './trade-mixed-table-thead.component.pug',
  styleUrls: ['./trade-mixed-table-thead.component.scss']
})
export class TradeMixedTableTheadComponent implements OnInit {
  sortSettings = {
    id: '',
    type: 0 // -1 - from small to big, 1 - from big to small, 0 - none
  }
  constructor() { }

  ngOnInit() {
  }

  changeSort(id) {
    if(this.sortSettings.id === id) {
      if(this.sortSettings.type === -1) {
        this.sortSettings.type = 1;
      } else if(this.sortSettings.type === 1) {
        this.sortSettings.type = 0;
      } else {
        this.sortSettings.type = -1;
      }
    } else {
      this.sortSettings = {
        id,
        type: -1
      };
    }
  }

}
