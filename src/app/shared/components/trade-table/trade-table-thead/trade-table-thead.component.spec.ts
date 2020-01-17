import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTableTheadComponent } from './trade-table-thead.component';

describe('TradeTableTheadComponent', () => {
  let component: TradeTableTheadComponent;
  let fixture: ComponentFixture<TradeTableTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeTableTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTableTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
