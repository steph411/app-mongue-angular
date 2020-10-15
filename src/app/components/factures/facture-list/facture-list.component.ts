import { Facture } from './../../../model/facture';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  facture: Observable<Facture[]>;
  constructor(private factureService: FactureService,
              private router: Router) {}

  // ************************************************** */
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.facture = this.factureService.getFactureList();
  }

  deleteRdv(id: number): void {
    this.factureService.deleteFacture(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  rdvDetails(id: number): void{
    this.router.navigate(['facture-details', id]);
  }

  updateRdv(id: number): void{
    this.router.navigate(['update-facture', id]);
  }

}
