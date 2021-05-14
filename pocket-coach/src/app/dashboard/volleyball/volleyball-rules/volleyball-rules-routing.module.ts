/**
 * File name: volleyball-rules-routing.module.ts
 * Purpose: Routing configuration for Rules Home Page
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

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
