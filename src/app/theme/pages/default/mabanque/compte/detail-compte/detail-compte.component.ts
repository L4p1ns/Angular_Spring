import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CompteService } from "../../services/comptes.service";

@Component({
  selector: "detail-compte",
  templateUrl: "./detail-compte.component.html",
  styles: []
})
export class DetailCompteComponent implements OnInit {
  id;
  myClient;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.compteService.getClientByCompte(this.id).subscribe(client => {
      this.myClient = client;
      console.log(this.myClient);
    });
  }
}
