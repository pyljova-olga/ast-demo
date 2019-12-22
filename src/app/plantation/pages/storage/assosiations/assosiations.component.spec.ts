import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosiationsComponent } from './assosiations.component';

describe('AssosiationsComponent', () => {
  let component: AssosiationsComponent;
  let fixture: ComponentFixture<AssosiationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosiationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
