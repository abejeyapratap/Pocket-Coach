import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballGuidesPage } from './volleyball-guides.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballGuidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballGuidesPageRoutingModule {}
