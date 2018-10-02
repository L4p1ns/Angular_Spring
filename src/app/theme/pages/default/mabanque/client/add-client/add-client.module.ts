import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutModule } from "../../../../../layouts/layout.module";
import { DefaultComponent } from "../../../default.component";

import { AddClientComponent } from "./add-client.component";
import { ClientsService } from "../../services/clients.service";
// import { AlertComponent } from "../../../../../../auth/_directives/alert.component";
import { AlertService } from "../../../../../../auth/_services/alert.service";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: AddClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [AddClientComponent],
  providers: [ClientsService, AlertService]
  // entryComponents: [AlertComponent]
})
export class AddClientRoutingModule {}
