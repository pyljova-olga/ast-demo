import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: '[number-input]',
  templateUrl: './number-input.component.pug',
  styleUrls: ['./number-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberInputComponent implements OnInit {
  numberField: FormControl = new FormControl('');
  @Input()
  step = 0.01;

  @Input()
  label = '';

  @Input()
  showButtons = true;

  @Input()
  min = 0;

  @Input()
  align = '';

  @Input()
  isDecimal = true;

  @Input()
  suffix = '';

  @Input()
  defaultValue = 0.00;

  @Output()
  defaultValueChange = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'plus',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/plus.svg'));
    iconRegistry.addSvgIcon(
        'minus',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/minus.svg'));
  }

  ngOnInit() {
    let value = this.defaultValue.toString();
    if(this.isDecimal) {
      value = value.replace( /\./g, "," );
    }

    this.numberField.setValue(this.suffix ? value + ' ' + this.suffix : value.toString());
  }

  change(e, operand='plus') {
    e.preventDefault()
    let currentValue = this.numberField.value;
    if(this.isDecimal) {
      currentValue = parseFloat(currentValue.replace(/,/, '.').replace(/[^0-9.]/g, ''));
    } else {
      currentValue = parseInt(currentValue.replace(/[^0-9]/g, ''));
    }
    let result = 0
    if(operand === 'plus') {
      result = currentValue + this.step;
    } else {
      result = (currentValue - this.step) > 0 ? currentValue - this.step : 0;
    }
    this.numberField.setValue(this.suffix ? result + ' ' + this.suffix : result.toString());
    this.onChange();
  }

  onInput(e) {
    const startPos = e.target.selectionStart;
    let value = this.numberField.value;
    console.log(this.isDecimal, value)
    if(this.isDecimal) {
      value = value.replace(/\./, ',').replace(/[^0-9,]/g, '');
      const arr = value.split(',');
      value = arr.shift() + (arr.length > 0 ? ',' + arr.join('') : '');
    } else {
      value = parseInt(value.replace(/[^0-9]/g, '') || '0');
    }

    this.numberField.setValue(this.suffix ? value + ' ' + this.suffix : value.toString());
    if(startPos <= value.length) {
      e.target.setSelectionRange(startPos, startPos);
    }
    this.emit();
  }

  emit() {
    let value = this.numberField.value;
    if(this.isDecimal) {
      value = value.replace( /,/g, "." ).replace(/[^0-9.]/g, '') || '0';
      value = parseFloat(value).toFixed(2);
    } else {
      value = parseInt(value.replace(/[^0-9]/g, '') || '0');
    }
    if(value < this.min) {
      value = this.min;
    }
    this.defaultValueChange.emit(value);
    return value.toString();
  }

  onChange() {
    const value = this.emit().replace(/\./g, ",");
    this.numberField.setValue(this.suffix ? value + ' ' + this.suffix : value.toString());
  }

}
