import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HittingPage } from './hitting.page';

const routes: Routes = [
  {
    path: '',
    component: HittingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HittingPageRoutingModule {}
