import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballSizePage } from './volleyball-size.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballSizePageRoutingModule {}
