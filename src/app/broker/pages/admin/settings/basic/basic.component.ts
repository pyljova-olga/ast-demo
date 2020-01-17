import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: '[app-basic]',
  templateUrl: './basic.component.pug',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, OnDestroy {
  isFullDaySubscription: Subscription;
  settingsForm: FormGroup;
  periods: FormArray;

  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'close',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/close.svg'));
  }

  get days(): any { return this.settingsForm.get('days'); }
  get timerApprove(): any { return this.settingsForm.get('timerApprove'); }
  get isFullDay(): any { return this.settingsForm.get('isFullDay'); }
  get timerPayment(): any { return this.settingsForm.get('timerPayment'); }
  get timerUpdate(): any { return this.settingsForm.get('timerUpdate'); }


  ngOnInit() {
    this.settingsForm = this.fb.group({
      periods: this.fb.array([this.cretePeriod()]),
      isFullDay: [false, {
        updateOn: 'change'
      }],
      days: [[1, 3]],
      timerApprove: [20, [Validators.required]],
      timerPayment: [20, [Validators.required]],
      timerUpdate: [20, [Validators.required]],
    }, {
      updateOn: 'submit'
    });

    this.isFullDaySubscription = this.settingsForm.get('isFullDay').valueChanges
        .subscribe(value => {
        });
  }

  ngOnDestroy() {}

  getPeriod(i, field): any { return this.settingsForm.get('periods')['controls'][i].get(field); }

  cretePeriod(): FormGroup {
    return this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
    }, {
      updateOn: 'change'
    });
  }

  removePeriod(i) {
    this.periods = this.settingsForm.get('periods') as FormArray;
    this.periods.removeAt(i);
  }

  addPeriod() {
    this.periods = this.settingsForm.get('periods') as FormArray;
    this.periods.push(this.cretePeriod());
  }

  onChange(i, field) {
    let value = this.getPeriod(i, field).value;
    value = value.replace(/[^0-9:]/g, '');
    const hasDot = value.indexOf(':') > -1;

    const arr = value.split(':');
    if(parseInt(arr[0]) > 23) {
      arr[0] = '23';
    }
    if(hasDot) {
      if(arr[0].length === 1) {
        arr[0] = '0' + arr[0];
      } else if(arr[0] === '') {
        arr[0] = '00';
      }
    }

    if(arr[1]) {
      if(arr[1].length === 1) {
        arr[1] = '0' + arr[1];
      } else if(parseInt(arr[1]) > 59) {
        arr[1] = '59';
      }
    } else if(hasDot) {
      arr[1] = '00';
    }

    value = arr[0];
    if(hasDot || arr[0].length === 2) {
      value += ':';
    }
    if(arr[1]) {
      value += arr[1].replace(/:/g, '');
    }

    this.getPeriod(i, field).setValue(value);
  }

  submit() {
    console.log('submit form');
  }

}
