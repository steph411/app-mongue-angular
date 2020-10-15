import { Facture } from './../../../model/facture';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { Rdv } from 'src/app/model/rdv';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {

  id: number;
  facture: Facture = {
    age: undefined,
    caissier: "",
    contribuable: 0,
    date: new Date(),
    designation: "",
    patient: "",
    id: 0,
    prixtotal: 0,
    prixunitaire: 0,
    quantite: 1,
    sexe: "",
    time: new Date()


  };
  photo: string;
  submitted = false;
  constructor(private factureService: FactureService, private router: Router) { }

  ngOnInit(): void {
  }


  save(): void {
    console.log({ facture: this.facture });
    this.factureService.createFacture(this.facture).subscribe(data => {
      console.log(data);
      this.facture = new Facture();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/factures']);
  }

}
