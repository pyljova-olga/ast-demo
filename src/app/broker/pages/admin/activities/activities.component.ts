import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {conditionalValidator} from '../../../../utils/formValidators';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatChipInputEvent, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/typings/esm5/autocomplete';

@Component({
  selector: '[app-activities]',
  templateUrl: './activities.component.pug',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  period = new FormControl(1);
  settingsForm = this.fb.group({
    period: [1],
    user: [''],
    activity: ['']
  });

  activities: string[] = [];
  users: string[] = [];

  allActivities: string[] = ['enter', 'login', 'register', 'buy'];
  allUsers: string[] = ['user1', 'user2', 'user3'];

  filteredActivities: Observable<string[]>;
  filteredUsers: Observable<string[]>;

  @ViewChild('userAuto', {static: false}) matAutocomplete: MatAutocomplete;
  @ViewChild('activityAuto', {static: false}) matAutocomplete2: MatAutocomplete;


  countries = [
    {name: 'USA'},
    {name: 'Russia'},
    {name: 'Ukraine'},
    {name: 'Canada'},
  ];

  get activity(): any { return this.settingsForm.get('activity'); }
  get user(): any { return this.settingsForm.get('user'); }


  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
        'keyboard_arrow_up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));

    this.filteredActivities = this.activity.valueChanges.pipe(
        startWith(null),
        map((activity: string | null) => activity ? this._filter(activity, this.allActivities) : this.allActivities.slice()));

    this.filteredUsers = this.user.valueChanges.pipe(
        startWith(null),
        map((user: string | null) => user ? this._filter(user, this.allUsers) : this.allUsers.slice()));
  }

  ngOnInit() {
  }

  submit() {

  }

  add(event: MatChipInputEvent, ctrl: FormControl, list: string[]): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen && !this.matAutocomplete2.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        list.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      ctrl.setValue(null);
    }
  }

  remove(item: string, list: string[]): void {
    const index = list.indexOf(item);

    if (index >= 0) {
      list.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent, ctrl: FormControl, selectedList: string[]): void {
    selectedList.push(event.option.viewValue);
    ctrl.setValue(null);
  }

  private _filter(value: string, list): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(v => v.toLowerCase().indexOf(filterValue) === 0);
  }
}
