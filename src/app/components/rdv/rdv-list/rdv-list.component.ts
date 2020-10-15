import { RdvService } from './../../../services/rdv.service';
import { Rdv } from './../../../model/rdv';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {

  rdv: Observable<Rdv[]>;
  constructor(private rdvService: RdvService,
              private router: Router) {}

  // ************************************************** */
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.rdv = this.rdvService.getRdvList();
  }

  deleteRdv(id: number): void {
    this.rdvService.deleteRdv(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  rdvDetails(id: number): void{
    this.router.navigate(['rdv-details', id]);
  }

  updateRdv(id: number): void{
    this.router.navigate(['update-rdv', id]);
  }

}
