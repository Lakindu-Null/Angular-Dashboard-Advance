import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCommisionComponent } from './sales-commision.component';

describe('SalesCommisionComponent', () => {
  let component: SalesCommisionComponent;
  let fixture: ComponentFixture<SalesCommisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesCommisionComponent]
    });
    fixture = TestBed.createComponent(SalesCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
