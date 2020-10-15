import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-rdv-details',
  templateUrl: './rdv-details.component.html',
  styleUrls: ['./rdv-details.component.css']
})
export class RdvDetailsComponent implements OnInit {

  id: number;
  patient: Patient;

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

  list(): void{
    this.router.navigate(['rdv']);
  }
}
