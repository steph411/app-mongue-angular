import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }

  save(): void {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.patient = new Patient();
      this.gotoList();
    },
    error => console.log(error));
    // error => console.log(alert('Code patient existant..')));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/patients']);
  }

}
