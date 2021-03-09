import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballPage } from './volleyball.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballPageRoutingModule {}
