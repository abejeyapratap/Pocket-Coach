import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisRulesPage } from './tennis-rules.page';

const routes: Routes = [
  {
    path: '',
    component: TennisRulesPage
  },
  {
    path: 'tennis-basic',
    loadChildren: () => import('./tennis-basic/tennis-basic.module').then( m => m.TennisBasicPageModule)
  },
  {
    path: 'tennis-advanced',
    loadChildren: () => import('./tennis-advanced/tennis-advanced.module').then( m => m.TennisAdvancedPageModule)
  },
  {
    path: 'tennis-serving',
    loadChildren: () => import('./tennis-serving/tennis-serving.module').then( m => m.TennisServingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisRulesPageRoutingModule {}
