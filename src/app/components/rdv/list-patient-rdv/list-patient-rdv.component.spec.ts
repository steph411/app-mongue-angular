import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientRdvComponent } from './list-patient-rdv.component';

describe('ListPatientRdvComponent', () => {
  let component: ListPatientRdvComponent;
  let fixture: ComponentFixture<ListPatientRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPatientRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
