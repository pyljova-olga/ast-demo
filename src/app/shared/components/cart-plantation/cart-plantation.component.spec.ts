import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlantationComponent } from './cart-plantation.component';

describe('CartPlantationComponent', () => {
  let component: CartPlantationComponent;
  let fixture: ComponentFixture<CartPlantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPlantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
