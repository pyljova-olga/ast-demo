import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[modal-lengths]',
  templateUrl: './modal-lengths.component.pug',
  styleUrls: ['./modal-lengths.component.scss']
})
export class ModalLengthsComponent implements OnInit {
  @Input()
  lengths = [];

  constructor() { }

  ngOnInit() {
  }

}
