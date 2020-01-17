import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTypeItemComponent } from './settings-type-item.component';

describe('SettingsTypeItemComponent', () => {
  let component: SettingsTypeItemComponent;
  let fixture: ComponentFixture<SettingsTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
