import { Rdv } from './../../../model/rdv';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { RdvService } from 'src/app/services/rdv.service';
import { Patient } from 'src/app/model/patient';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrls: ['./update-rdv.component.css']
})
export class UpdateRdvComponent implements OnInit {

  id: number;
  rdv: Rdv = new Rdv();
  patient: Patient;
  submitted = false;
  constructor(private route: ActivatedRoute, private rdvService: RdvService, private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.rdv = new Rdv();

    this.id = this.route.snapshot.params['id'];

    this.rdvService.getRdv(this.id)
      .subscribe(data => {
        console.log(data);
        this.rdv = data;
      }, error => console.log(error));
  }

  updateRdv(): void {
    this.rdvService.updateRdv(this.id, this.rdv)
      .subscribe(data => {
        console.log(data);
        this.rdv = new Rdv();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateRdv();
  }

  gotoList(): void {
    this.router.navigate(['/rdv']);
  }
}
