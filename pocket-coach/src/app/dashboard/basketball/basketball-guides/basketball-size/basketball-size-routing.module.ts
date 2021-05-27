import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballSizePage } from './basketball-size.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballSizePageRoutingModule {}
