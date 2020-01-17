import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeClosedComponent } from './trade-closed.component';

describe('TradeClosedComponent', () => {
  let component: TradeClosedComponent;
  let fixture: ComponentFixture<TradeClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
