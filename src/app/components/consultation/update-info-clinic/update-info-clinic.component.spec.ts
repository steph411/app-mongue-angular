import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoClinicComponent } from './update-info-clinic.component';

describe('UpdateInfoClinicComponent', () => {
  let component: UpdateInfoClinicComponent;
  let fixture: ComponentFixture<UpdateInfoClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfoClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
