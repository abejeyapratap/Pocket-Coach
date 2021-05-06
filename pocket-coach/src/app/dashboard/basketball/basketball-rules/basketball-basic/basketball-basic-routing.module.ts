import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballBasicPage } from './basketball-basic.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballBasicPageRoutingModule {}
