import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnReprintComponent } from './sales-return-reprint.component';

describe('SalesReturnReprintComponent', () => {
  let component: SalesReturnReprintComponent;
  let fixture: ComponentFixture<SalesReturnReprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReturnReprintComponent]
    });
    fixture = TestBed.createComponent(SalesReturnReprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
