import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerRulesPage } from './soccer-rules.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerRulesPage,
  },
  {
    path: 'soccer-basic',
    loadChildren: () =>
      import('./soccer-basic/soccer-basic.module').then(
        (m) => m.SoccerBasicPageModule
      ),
  },
  {
    path: 'soccer-advanced',
    loadChildren: () =>
      import('./soccer-advanced/soccer-advanced.module').then(
        (m) => m.SoccerAdvancedPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerRulesPageRoutingModule {}
