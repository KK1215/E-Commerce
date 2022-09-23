import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormsComponent } from './shipping-forms.component';

describe('ShippingFormsComponent', () => {
  let component: ShippingFormsComponent;
  let fixture: ComponentFixture<ShippingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
