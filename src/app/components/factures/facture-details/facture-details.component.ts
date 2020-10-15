import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/model/facture';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {

  id: number;
  facture: Facture;

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

  list(): void{
    this.router.navigate(['factures']);
  }
}
