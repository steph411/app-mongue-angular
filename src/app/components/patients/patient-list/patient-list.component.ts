import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

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

  patientDetails(id: number): void{
    this.router.navigate(['patient-details', id]);
  }

  updatePatient(id: number): void{
    this.router.navigate(['update-patient', id]);
  }

}
