import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMixedTableTheadComponent } from './trade-mixed-table-thead.component';

describe('TradeMixedTableTheadComponent', () => {
  let component: TradeMixedTableTheadComponent;
  let fixture: ComponentFixture<TradeMixedTableTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMixedTableTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMixedTableTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
