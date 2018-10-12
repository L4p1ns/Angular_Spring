import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LayoutModule } from "../../../../../layouts/layout.module";
import { DefaultComponent } from "../../../default.component";
import { AddCompteComponent } from "./add-compte.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: AddCompteComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [AddCompteComponent],
  providers: []
})
export class AddCompteRoutingModule {}

export const routedComponents = [AddCompteComponent];
