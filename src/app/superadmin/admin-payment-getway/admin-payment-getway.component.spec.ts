import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentGetwayComponent } from './admin-payment-getway.component';

describe('AdminPaymentGetwayComponent', () => {
  let component: AdminPaymentGetwayComponent;
  let fixture: ComponentFixture<AdminPaymentGetwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentGetwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentGetwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
