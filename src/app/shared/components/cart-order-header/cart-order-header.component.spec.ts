import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderHeaderComponent } from './cart-order-header.component';

describe('CartOrderHeaderComponent', () => {
  let component: CartOrderHeaderComponent;
  let fixture: ComponentFixture<CartOrderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
