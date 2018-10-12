import { Component, OnInit } from "@angular/core";

import { CompteService } from "../services/comptes.service";

@Component({
  selector: "compte",
  templateUrl: "./compte.component.html",
  styles: []
})
export class CompteComponent implements OnInit {
  comptes: any = {};
  etatTab: boolean = false;

  constructor(private compteService: CompteService) {}

  ngOnInit() {
    this.compteService.getComptes().subscribe(resp => {
      this.comptes = resp;
    });
  }
}
