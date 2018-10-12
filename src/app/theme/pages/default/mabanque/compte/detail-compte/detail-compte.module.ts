import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutModule } from '../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../default.component';
import { CompteService } from '../../services/comptes.service';
import { DetailCompteComponent } from './detail-compte.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DetailCompteComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports: [RouterModule],
  declarations: [DetailCompteComponent],
  providers: [CompteService]
})
export class DetailCompteModule {}
