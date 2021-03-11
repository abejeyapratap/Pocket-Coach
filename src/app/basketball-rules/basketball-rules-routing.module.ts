import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballRulesPage } from './basketball-rules.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballRulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballRulesPageRoutingModule {}
