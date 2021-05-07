import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisDetailsPage } from './tennis-details.page';

const routes: Routes = [
  {
    path: '',
    component: TennisDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisDetailsPageRoutingModule {}
