import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.pug',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {
  restoreForm: FormGroup;
  result: string;
  constructor(private fb: FormBuilder) { }

  get email(): any { return this.restoreForm.get('email'); }

  ngOnInit() {
    this.restoreForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if(this.restoreForm.get('email').value === 'admin@admin.ru') {
      this.result = 'success';
    } else {
      this.result = 'error';
    }
  }

}
