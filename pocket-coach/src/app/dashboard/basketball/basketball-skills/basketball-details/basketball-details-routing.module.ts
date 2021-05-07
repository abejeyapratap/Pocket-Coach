import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballDetailsPage } from './basketball-details.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballDetailsPageRoutingModule {}
