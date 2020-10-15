import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.css']
})
export class ConsultationListComponent implements OnInit {

  consultations: Observable<Patient[]>;
  constructor(private patientService: PatientService,
              private router: Router) {}

  // ************************************************** */
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.consultations = this.patientService.getPatientList();
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patientDetails(id: number): void{
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number): void{
    this.router.navigate(['update-patient', id]);
  }
}
