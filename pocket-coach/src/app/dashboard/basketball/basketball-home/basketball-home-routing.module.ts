import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballHomePage } from './basketball-home.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballHomePageRoutingModule {}
