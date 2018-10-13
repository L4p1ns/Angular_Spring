import { Component, OnInit } from "@angular/core";

import { CompteService } from "../services/comptes.service";
import { OperationsService } from "../services/operations.service";

@Component({
  selector: "compte",
  templateUrl: "./compte.component.html",
  styles: []
})
export class CompteComponent implements OnInit {
  comptes: any = {};
  operations: any = {};
  etatTab: boolean = false;

  constructor(
    private compteService: CompteService,
    private operationService: OperationsService
  ) {}

  ngOnInit() {
    this.compteService.getComptes().subscribe(resp => {
      this.comptes = resp;
    });
    // Operations
    this.operationService.getOperations().subscribe(operations => {
      this.operations = operations;
    });
  }
}
