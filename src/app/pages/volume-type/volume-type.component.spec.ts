import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeTypeComponent } from './volume-type.component';

describe('VolumeTypeComponent', () => {
  let component: VolumeTypeComponent;
  let fixture: ComponentFixture<VolumeTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeTypeComponent]
    });
    fixture = TestBed.createComponent(VolumeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
