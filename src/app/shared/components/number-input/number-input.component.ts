import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: '[number-input]',
  templateUrl: './number-input.component.pug',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  numberField: FormControl = new FormControl('');
  @Input()
  step = 0.01;

  @Input()
  label = '';

  @Input()
  defaultValue = 0.00;

  @Output()
  defaultValueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    const value = this.defaultValue.toString().replace( /\./g, "," );
    this.numberField.setValue(value + ' $');
  }

  change(operand='plus') {
    console.log(operand, this.step);
  }

  onInput(e) {
    const startPos = e.target.selectionStart;
    let value = this.numberField.value.replace(/\./, ',').replace(/[^0-9,]/g, '');
    const arr = value.split(',');
    value = arr.shift() + (arr.length > 0 ? ',' + arr.join('') : '');
    this.numberField.setValue(value + ' $');
    if(startPos <= value.length) {
      e.target.setSelectionRange(startPos, startPos);
    }
    this.emit();
  }

  emit() {
    let value = this.numberField.value.replace( /,/g, "." ).replace(/[^0-9.]/g, '') || '0';
    value = parseFloat(value).toFixed(2);
    this.defaultValueChange.emit(value);
    return value;
  }

  onChange() {
    const value = this.emit().replace(/\./g, ",");
    this.numberField.setValue(value + ' $');
  }

}
