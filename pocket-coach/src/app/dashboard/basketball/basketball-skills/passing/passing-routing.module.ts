import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassingPage } from './passing.page';

const routes: Routes = [
  {
    path: '',
    component: PassingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassingPageRoutingModule {}
