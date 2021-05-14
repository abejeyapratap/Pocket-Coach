import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballGuidesPage } from './basketball-guides.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballGuidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballGuidesPageRoutingModule {}
