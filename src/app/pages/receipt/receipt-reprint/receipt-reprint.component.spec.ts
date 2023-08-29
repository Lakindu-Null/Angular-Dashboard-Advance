import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptReprintComponent } from './receipt-reprint.component';

describe('ReceiptReprintComponent', () => {
  let component: ReceiptReprintComponent;
  let fixture: ComponentFixture<ReceiptReprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptReprintComponent]
    });
    fixture = TestBed.createComponent(ReceiptReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
