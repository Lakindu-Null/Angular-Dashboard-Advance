import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReprintComponent } from './invoice-reprint.component';

describe('InvoiceReprintComponent', () => {
  let component: InvoiceReprintComponent;
  let fixture: ComponentFixture<InvoiceReprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceReprintComponent]
    });
    fixture = TestBed.createComponent(InvoiceReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
