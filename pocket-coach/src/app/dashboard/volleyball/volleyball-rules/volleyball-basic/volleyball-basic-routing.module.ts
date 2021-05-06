import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballBasicPage } from './volleyball-basic.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballBasicPageRoutingModule {}
