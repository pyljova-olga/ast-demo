import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiError: string;
  testNumber = 0.254;

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


}
