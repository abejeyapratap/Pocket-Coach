import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisPage } from './tennis.page';

const routes: Routes = [
  {
    path: '',
    component: TennisPage
  },
  {
    path: 'tennis-home',
    loadChildren: () => import('./tennis-home/tennis-home.module').then( m => m.TennisHomePageModule)
  },
  {
    path: 'tennis-rules',
    loadChildren: () => import('./tennis-rules/tennis-rules.module').then( m => m.TennisRulesPageModule)
  },
  {
    path: 'tennis-videos',
    loadChildren: () => import('./tennis-videos/tennis-videos.module').then( m => m.TennisVideosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisPageRoutingModule {}
