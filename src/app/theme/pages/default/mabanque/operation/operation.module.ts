import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutModule } from "../../../../layouts/layout.module";
import { DefaultComponent } from "../../default.component";
import { OperationsService } from "../services/operations.service";
import { OperationComponent } from "./operation.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: OperationComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [OperationComponent],
  providers: [OperationsService]
})
export class OperationRoutingModule {}
