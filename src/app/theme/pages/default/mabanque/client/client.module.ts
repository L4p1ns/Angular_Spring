import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutModule } from "../../../../layouts/layout.module";
import { DefaultComponent } from "../../default.component";
import { ClientComponent } from "./client.component";
import { ClientsService } from "../services/clients.service";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: ClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [ClientComponent],
  providers: [ClientsService]
})
export class ClientRoutingModule {}
