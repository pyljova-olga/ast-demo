import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLengthsComponent } from './modal-lengths.component';

describe('ModalLengthsComponent', () => {
  let component: ModalLengthsComponent;
  let fixture: ComponentFixture<ModalLengthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLengthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLengthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
