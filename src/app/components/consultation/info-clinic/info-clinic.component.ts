import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-info-clinic',
  templateUrl: './info-clinic.component.html',
  styleUrls: ['./info-clinic.component.css']
})
export class InfoClinicComponent implements OnInit {

  id: number;
  patient: Patient;
  submitted = false;
  patients: Observable<Patient[]>;
  constructor(private route: ActivatedRoute, private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  updatePatient(id: number): void{
    this.router.navigate(['info-clinic', id]);
  }

  reloadData(): void {
    this.patients = this.patientService.getPatientList();
  }

  gotoList(): void {
    this.router.navigate(['/patients']);
  }
}
