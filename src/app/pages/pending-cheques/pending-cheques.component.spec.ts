import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChequesComponent } from './pending-cheques.component';

describe('PendingChequesComponent', () => {
  let component: PendingChequesComponent;
  let fixture: ComponentFixture<PendingChequesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingChequesComponent]
    });
    fixture = TestBed.createComponent(PendingChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
