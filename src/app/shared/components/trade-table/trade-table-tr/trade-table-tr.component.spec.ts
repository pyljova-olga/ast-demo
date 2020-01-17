import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTableTrComponent } from './trade-table-tr.component';

describe('TradeTableTrComponent', () => {
  let component: TradeTableTrComponent;
  let fixture: ComponentFixture<TradeTableTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeTableTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTableTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
