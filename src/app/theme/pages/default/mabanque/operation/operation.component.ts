import { Component, OnInit } from "@angular/core";

import { OperationsService } from "../services/operations.service";

@Component({
  selector: "operations",
  templateUrl: "./operation.component.html"
})
export class OperationComponent implements OnInit {
  operations: any = {};

  constructor(private operationService: OperationsService) {}

  ngOnInit() {
    this.operationService.getOperations().subscribe(data => {
      this.operations = data;
    });
  }
}
