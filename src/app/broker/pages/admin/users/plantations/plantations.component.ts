import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-plantations',
  templateUrl: './plantations.component.pug',
  styleUrls: ['./plantations.component.scss']
})
export class PlantationsComponent implements OnInit {
  filtersForm: FormGroup = this.fb.group({
    company: [''],
    firstName: [''],
    secondName: [''],
    role: [''],
  });
  filteredCompanies: Observable<string[]>;
  filteredFirstNames: Observable<string[]>;
  filteredSecondNames: Observable<string[]>;
  allCompanies: string[] = ['Company 1', 'Lemon Comp', 'Lime Ink', 'Orange 1', 'Strawberry 43'];
  allFirstNames: string[] = ['Olga', 'Max', 'Denys', 'Nick', 'Mary'];
  allSecondNames: string[] = ['Pylova', 'Brown', 'Shildt', 'Strange', 'Somebody'];

  @ViewChild('roleField', {static: true}) roleField: any;

  roles = [
    {name: 'Менеджер'},
    {name: 'Администратор'},
    {name: 'Пользователь'},
  ];

  get company(): any { return this.filtersForm.get('company'); }
  get firstName(): any { return this.filtersForm.get('firstName'); }
  get secondName(): any { return this.filtersForm.get('secondName'); }
  get role(): any { return this.filtersForm.get('role'); }

  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
        'keyboard_arrow_up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));

    this.filteredCompanies = this.company.valueChanges.pipe(
        startWith(null),
        map((company: string | null) => company ? this._filter(company, this.allCompanies) : this.allCompanies.slice()));
    this.filteredSecondNames = this.secondName.valueChanges.pipe(
        startWith(null),
        map((secondName: string | null) => secondName ? this._filter(secondName, this.allSecondNames) : this.allSecondNames.slice()));
    this.filteredFirstNames = this.firstName.valueChanges.pipe(
        startWith(null),
        map((firstName: string | null) => firstName ? this._filter(firstName, this.allFirstNames) : this.allFirstNames.slice()));
  }

  ngOnInit() {
  }

  submit() {}

  cancel() {
    this.company.setValue('');
    this.firstName.setValue('');
    this.secondName.setValue('');
    this.role.setValue('');
  }

  onRoleSelect() {
    this.roleField._elementRef.nativeElement.classList.remove('mat-focused');
  }

  private _filter(value: string, list: string[]): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }


}
