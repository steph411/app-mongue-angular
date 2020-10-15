import { Rdv } from './../../../model/rdv';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { RdvService } from 'src/app/services/rdv.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-create-rdv',
  templateUrl: './create-rdv.component.html',
  styleUrls: ['./create-rdv.component.css']
})
export class CreateRdvComponent implements OnInit {

  id: number;
  rdv: Rdv = new Rdv();
  patient: Patient;
  submitted = false;
  constructor(private route: ActivatedRoute, private rdvService: RdvService, private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];

    this.patientService.getPatient(this.id)
      .subscribe(data => {
        console.log(data);
        this.patient = data;
        // this.rdv = data;
      }, error => console.log(error));
  }

  newPatient(): void {
    this.submitted = false;
    this.rdv = new Rdv();
  }

  save(): void {
    this.rdvService.createRdv(this.rdv).subscribe(data => {
      console.log(data);
      this.rdv = new Rdv();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/rdv']);
  }

}
