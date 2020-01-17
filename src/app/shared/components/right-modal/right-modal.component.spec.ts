import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightModalComponent } from './right-modal.component';

describe('RightModalComponent', () => {
  let component: RightModalComponent;
  let fixture: ComponentFixture<RightModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
