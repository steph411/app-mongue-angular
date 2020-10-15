import { Facture } from './../../../model/facture';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

  id: number;
  facture: Facture;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private factureService: FactureService) { }

  ngOnInit(): void {
    this.facture = new Facture();

    this.id = this.route.snapshot.params['id'];

    this.factureService.getFacture(this.id)
      .subscribe(data => {
        console.log(data);
        this.facture = data;
      }, error => console.log(error));
  }

  updateFacture(): void {
    this.factureService.updateFacture(this.id, this.facture)
      .subscribe(data => {
        console.log(data);
        this.facture = new Facture();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateFacture();
  }

  gotoList(): void {
    this.router.navigate(['/factures']);
  }

}
