import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeReceiptComponent } from './make-receipt.component';

describe('MakeReceiptComponent', () => {
  let component: MakeReceiptComponent;
  let fixture: ComponentFixture<MakeReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeReceiptComponent]
    });
    fixture = TestBed.createComponent(MakeReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
