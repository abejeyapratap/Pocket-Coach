import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballRulesPage } from './volleyball-rules.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballRulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballRulesPageRoutingModule {}
