import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerRulesPage } from './soccer-rules.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerRulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerRulesPageRoutingModule {}
