import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartWaitingComponent } from './cart-waiting.component';

describe('CartWaitingComponent', () => {
  let component: CartWaitingComponent;
  let fixture: ComponentFixture<CartWaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartWaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
