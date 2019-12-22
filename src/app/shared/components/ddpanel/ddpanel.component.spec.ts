import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdPanelComponent } from './ddpanel.component';

describe('DdPanelComponent', () => {
  let component: DdPanelComponent;
  let fixture: ComponentFixture<DdPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
