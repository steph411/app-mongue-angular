import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClinicComponent } from './info-clinic.component';

describe('InfoClinicComponent', () => {
  let component: InfoClinicComponent;
  let fixture: ComponentFixture<InfoClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
