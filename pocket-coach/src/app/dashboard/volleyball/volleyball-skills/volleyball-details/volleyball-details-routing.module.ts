import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballDetailsPage } from './volleyball-details.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballDetailsPageRoutingModule {}
