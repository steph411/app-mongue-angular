import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvInfoPersComponent } from './rdv-info-pers.component';

describe('RdvInfoPersComponent', () => {
  let component: RdvInfoPersComponent;
  let fixture: ComponentFixture<RdvInfoPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvInfoPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvInfoPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
