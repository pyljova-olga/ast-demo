import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[cart-new]',
  templateUrl: './cart-new.component.pug',
  styleUrls: ['./cart-new.component.scss']
})
export class CartNewComponent implements OnInit {
  orders = [
      {id: 1, plantations: [{id: 1}, {id: 2}]},
      {id: 2, plantations: [{id: 2}, {id: 1}]},
      {id: 3, plantations: [{id: 3}, {id: 1}]},
  ];
  openedOrder = 1;
  openedPlantation = 1;

  constructor() { }

  ngOnInit() {
  }
  toggleOrder(id: number) {
    if(this.openedOrder === id) {
      this.openedOrder = -1;
    } else {
      this.openedOrder = id;
      this.openedPlantation = this.orders.filter(v => v.id === id)[0].plantations[0].id;
    }
  }
  togglePlantation(id: number) {
    if(this.openedPlantation === id) {
      this.openedPlantation = -1;
    } else {
      this.openedPlantation = id;
    }
  }
}
