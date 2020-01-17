import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSubTypeItemComponent } from './settings-sub-type-item.component';

describe('SettingsSubTypeItemComponent', () => {
  let component: SettingsSubTypeItemComponent;
  let fixture: ComponentFixture<SettingsSubTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSubTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSubTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
