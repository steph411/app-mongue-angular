import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-info-clinic',
  templateUrl: './update-info-clinic.component.html',
  styleUrls: ['./update-info-clinic.component.css']
})
export class UpdateInfoClinicComponent implements OnInit {

  id: number;
  patient: Patient;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];

    this.patientService.getPatient(this.id)
      .subscribe(data => {
        console.log(data);
        this.patient = data;
      }, error => console.log(error));
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.id, this.patient)
      .subscribe(data => {
        console.log(data);
        this.patient = new Patient();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updatePatient();
  }

  gotoList(): void {
    this.router.navigate(['/patients']);
  }
}
