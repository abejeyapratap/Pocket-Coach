import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServingPage } from './serving.page';

const routes: Routes = [
  {
    path: '',
    component: ServingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServingPageRoutingModule {}
