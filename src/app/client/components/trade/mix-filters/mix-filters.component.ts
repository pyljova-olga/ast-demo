import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatIconRegistry} from '@angular/material';
import {startWith, map} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/typings/esm5/autocomplete';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: '[mix-filters]',
  templateUrl: './mix-filters.component.pug',
  styleUrls: ['./mix-filters.component.scss']
})
export class MixFiltersComponent implements OnInit {
  filtersForm: FormGroup;
  showDetail: boolean = false;
  isStemPricePanelOpened = false;
  visible = true;
  selectable = true;
  removable = true;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


  countries = [
    {name: 'USA'},
    {name: 'Russia'},
    {name: 'Ukraine'},
    {name: 'Canada'},
  ];

  get country(): any { return this.filtersForm.get('country'); }
  get plantation(): any { return this.filtersForm.get('plantation'); }
  get type(): any { return this.filtersForm.get('type'); }
  get subType(): any { return this.filtersForm.get('subType'); }
  get price(): any { return this.filtersForm.get('price'); }
  get sum(): any { return this.filtersForm.get('sum'); }

  constructor(private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
    'keyboard_arrow_down',
    sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_down.svg'));
    iconRegistry.addSvgIcon(
    'keyboard_arrow_up',
    sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/keyboard_arrow_up.svg'));

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit() {
    this.filtersForm = this.fb.group({
      country: [''],
      plantation: [''],
      type: [''],
      subType: [''],
      price: [''],
      sum: [''],
    });
  }

  submit() {

  }

  updatePrice() {
    this.price.updateValueAndValidity();
  }

  cancel() {
    this.country.setValue('');
    this.plantation.setValue('');
    this.type.setValue('');
    this.subType.setValue('');
    this.price.setValue('');
    this.sum.setValue('');
  }

  toggleDetails() {
    this.showDetail = !this.showDetail;
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  formatNumber(e, control) {
    let newValue = (e.target.value).replace( /,/g, "." ).replace(/[^0-9.]/g, '');
    this.filtersForm.get(control).setValue(newValue);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
