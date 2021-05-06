import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballRulesPage } from './volleyball-rules.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballRulesPage
  },
  {
    path: 'volleyball-basic',
    loadChildren: () => import('./volleyball-basic/volleyball-basic.module').then( m => m.VolleyballBasicPageModule)
  },
  {
    path: 'volleyball-advanced',
    loadChildren: () => import('./volleyball-advanced/volleyball-advanced.module').then( m => m.VolleyballAdvancedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballRulesPageRoutingModule {}
