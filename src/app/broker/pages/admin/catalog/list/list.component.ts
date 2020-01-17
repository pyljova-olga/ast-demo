import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.pug',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  filtersForm: FormGroup = this.fb.group({
    type: [''],
    subtype: [''],
    length: [''],
  });
  filteredTypes: Observable<string[]>;
  filteredSubtypes: Observable<string[]>;
  filteredLengths: Observable<string[]>;
  allTypes: string[] = ['Company 1', 'Lemon Comp', 'Lime Ink', 'Orange 1', 'Strawberry 43'];
  allSubtypes: string[] = ['Olga', 'Max', 'Denys', 'Nick', 'Mary'];
  allLength: string[] = ['Pylova', 'Brown', 'Shildt', 'Strange', 'Somebody'];

  roles = [
    {name: 'Менеджер'},
    {name: 'Администратор'},
    {name: 'Пользователь'},
  ];

  t = [{
    id: 1,
    st: [{id: 1}, {id: 2}, {id: 3}]
  },{
    id: 2,
    st: [{id: 5}, {id: 4}, {id: 6}]
  },{
    id: 3,
    st: [{id: 7}, {id: 8}, {id: 9}]
  },{
    id: 4,
    st: [{id: 10}, {id: 11}, {id: 13}]
  }];

  openedTId = -1;
  openedSTId = -1;

  get type(): any { return this.filtersForm.get('type'); }
  get subtype(): any { return this.filtersForm.get('subtype'); }
  get length(): any { return this.filtersForm.get('length'); }

  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
        'keyboard_arrow_up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));

    this.filteredTypes = this.type.valueChanges.pipe(
        startWith(null),
        map((type: string | null) => type ? this._filter(type, this.allTypes) : this.allTypes.slice()));
    this.filteredSubtypes = this.subtype.valueChanges.pipe(
        startWith(null),
        map((subtype: string | null) => subtype ? this._filter(subtype, this.allSubtypes) : this.allSubtypes.slice()));
    this.filteredLengths = this.length.valueChanges.pipe(
        startWith(null),
        map((length: string | null) => length ? this._filter(length, this.allLength) : this.allLength.slice()));
  }

  ngOnInit() {
  }

  submit() {}

  cancel() {
    this.type.setValue('');
    this.subtype.setValue('');
    this.length.setValue('');
  }


  private _filter(value: string, list: string[]): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }

  deleteType(id) {
    console.log('delete type id = ', id);
  }

  changeType(id) {
    console.log('chate type id = ', id);
  }

  deleteSubtype(typeId, subtypeId) {
    console.log('delete subtype id = ', typeId, subtypeId);
  }

  changeSubtype(typeId, subtypeId) {
    console.log('chate subtype id = ', typeId, subtypeId);
  }

  deactivateSubtype(typeId, subtypeId) {
    console.log('deactivate subtype id = ', typeId, subtypeId);
  }
}
