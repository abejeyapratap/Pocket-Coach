import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballAdvancedPage } from './volleyball-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballAdvancedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballAdvancedPageRoutingModule {}
