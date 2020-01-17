import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {getMatAutocompleteMissingPanelError} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

// TEMP
export interface User {
  name: string;
}
export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiError: string;
  testNumber = 0.254;

  // TEMP

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  constructor(private fb: FormBuilder) { }

  get email(): any { return this.loginForm.get('email'); }
  get password(): any { return this.loginForm.get('password'); }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }, {
        updateOn: 'submit'
    });

    // TEMP
    this.filteredOptions = this.myControl.valueChanges
        .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
        );
  }

  onSubmit() {
    if(this.loginForm.status === 'VALID') {
      this.apiError = 'error';
      this.email.setErrors({'apiError': true});
      this.password.setErrors({'apiError': true});
    } else {
      // (this.loginForm as any)._setUpdateStrategy({updateOn: 'blur'});
    }
  }

  resetApiError() {
    this.apiError = '';
    this.email.setErrors({'apiError': null});
    this.password.setErrors({'apiError': null});
    this.email.updateValueAndValidity();
    this.password.updateValueAndValidity();
  }

  // TEMP

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
