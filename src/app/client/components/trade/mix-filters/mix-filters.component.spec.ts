import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixFiltersComponent } from './mix-filters.component';

describe('MixFiltersComponent', () => {
  let component: MixFiltersComponent;
  let fixture: ComponentFixture<MixFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
