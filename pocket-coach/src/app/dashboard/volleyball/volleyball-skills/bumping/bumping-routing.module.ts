import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BumpingPage } from './bumping.page';

const routes: Routes = [
  {
    path: '',
    component: BumpingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BumpingPageRoutingModule {}
