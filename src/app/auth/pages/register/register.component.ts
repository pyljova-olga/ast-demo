import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { conditionalValidator } from '../../../utils/formValidators';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import {MatIconRegistry} from '../../../../../node_modules/@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  alternatives: FormArray;
  result: string;

  isPlantationSubscription: Subscription;
  isLegalEntitySubscription: Subscription;

  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/close.svg'));
  }

  get email(): any { return this.registerForm.get('email'); }
  get plantationName(): any { return this.registerForm.get('plantationName'); }
  get companyName(): any { return this.registerForm.get('companyName'); }
  get contactName(): any { return this.registerForm.get('contactName'); }
  get contactPhone(): any { return this.registerForm.get('contactPhone'); }
  get agree(): any { return this.registerForm.get('agreeWithTermsAndConditions'); }

  ngOnInit() {
    this.registerForm = this.fb.group({
      isPlantation: [false, {
        updateOn: 'change'
      }],
      isLegalEntity: [true, {
        updateOn: 'change'
      }],
      plantationName: ['', [conditionalValidator(() => this.registerForm.get('isPlantation').value, Validators.required)]],
      companyName: ['', [conditionalValidator(() => ((!this.registerForm.get('isPlantation').value) && (this.registerForm.get('isLegalEntity').value === true)), Validators.required)]],
      contactName: ['', [Validators.required]],
      contactPhone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      skype: [''],
      agreeWithTermsAndConditions: ['', [Validators.requiredTrue]],
      alternatives: this.fb.array([])
    }, {
      updateOn: 'submit'
    });

    this.isPlantationSubscription = this.registerForm.get('isPlantation').valueChanges
      .subscribe(value => {
        this.registerForm.get('plantationName').updateValueAndValidity();
        this.registerForm.get('companyName').updateValueAndValidity();
      });

    this.isLegalEntitySubscription = this.registerForm.get('isLegalEntity').valueChanges
      .subscribe(value => {
        this.registerForm.get('plantationName').updateValueAndValidity();
        this.registerForm.get('companyName').updateValueAndValidity();
      });
  }

  ngOnDestroy() {}

  creteAlternative(): FormGroup {
    return this.fb.group({
      alternative: ['']
    });
  }

  removeAlternative(i) {
    this.alternatives = this.registerForm.get('alternatives') as FormArray;
    this.alternatives.removeAt(i);
  }

  addAlternative() {
    this.alternatives = this.registerForm.get('alternatives') as FormArray;
    this.alternatives.push(this.creteAlternative());
  }

  onSubmit() {
    console.log(this.agree)
    if(this.registerForm.status === 'VALID') {
      this.result = 'success';
    }
  }
}
