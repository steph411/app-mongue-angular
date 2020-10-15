import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-list-patient-rdv',
  templateUrl: './list-patient-rdv.component.html',
  styleUrls: ['./list-patient-rdv.component.css']
})
export class ListPatientRdvComponent implements OnInit {

  patients: Observable<Patient[]>;
  constructor(private patientService: PatientService,
              private router: Router) {}

  // ************************************************** */
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.patients = this.patientService.getPatientList();
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

  patientList(id: number): void{
    this.router.navigate(['patient-details', id]);
  }

  createRDV(): void{
    this.router.navigate(['create-rdv']);
  }
}
