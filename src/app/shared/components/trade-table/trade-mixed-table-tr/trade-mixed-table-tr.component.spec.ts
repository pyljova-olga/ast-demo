import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMixedTableTrComponent } from './trade-mixed-table-tr.component';

describe('TradeMixedTableTrComponent', () => {
  let component: TradeMixedTableTrComponent;
  let fixture: ComponentFixture<TradeMixedTableTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMixedTableTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMixedTableTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
