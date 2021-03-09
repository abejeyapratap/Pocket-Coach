import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballPage } from './basketball.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballPageRoutingModule {}
