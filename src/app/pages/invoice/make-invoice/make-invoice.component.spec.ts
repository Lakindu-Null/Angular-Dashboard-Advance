import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeInvoiceComponent } from './make-invoice.component';

describe('MakeInvoiceComponent', () => {
  let component: MakeInvoiceComponent;
  let fixture: ComponentFixture<MakeInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeInvoiceComponent]
    });
    fixture = TestBed.createComponent(MakeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
