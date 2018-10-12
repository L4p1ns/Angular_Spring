import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
import { CompteService } from '../services/comptes.service';
import { CompteComponent } from './compte.component';
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
  declarations: [CompteComponent],
  providers: [CompteService]
})
export class CompteRoutingModule {}
