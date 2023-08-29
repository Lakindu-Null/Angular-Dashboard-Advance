import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGrnComponent } from './make-grn.component';

describe('MakeGrnComponent', () => {
  let component: MakeGrnComponent;
  let fixture: ComponentFixture<MakeGrnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeGrnComponent]
    });
    fixture = TestBed.createComponent(MakeGrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
