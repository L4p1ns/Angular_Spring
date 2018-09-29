import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "../../../default.component";
import { EditClientComponent } from "./edit-client.component";
import { ClientsService } from "../../services";
import { LayoutModule } from "../../../../../layouts/layout.module";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: EditClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations:[EditClientComponent],
  providers: [ClientsService]
})
export class EditClientModule {}
