import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptCancelComponent } from './receipt-cancel.component';

describe('ReceiptCancelComponent', () => {
  let component: ReceiptCancelComponent;
  let fixture: ComponentFixture<ReceiptCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptCancelComponent]
    });
    fixture = TestBed.createComponent(ReceiptCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
