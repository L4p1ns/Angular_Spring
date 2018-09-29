import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultComponent } from "../../default.component";
import { CompteComponent } from "./compte.component";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "../../../../layouts/layout.module";
import { AddCompteComponent } from './add-compte/add-compte.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: CompteComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [CompteComponent, AddCompteComponent]
})
export class CompteRoutingModule {}
