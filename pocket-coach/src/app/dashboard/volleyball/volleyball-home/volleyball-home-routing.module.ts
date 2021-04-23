import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballHomePage } from './volleyball-home.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballHomePageRoutingModule {}
