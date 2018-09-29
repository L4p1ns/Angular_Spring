import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "../../../default.component";
import { DetailClientComponent } from "./detail-client.component";
import { LayoutModule } from "../../../../../layouts/layout.module";
import { ClientsService } from "../../services/clients.service";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DetailClientComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [DetailClientComponent],
  providers: [ClientsService]
})
export class DetailClientRoutingModule {}
