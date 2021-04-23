import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballPage } from './volleyball.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballPage
  },
  {
    path: 'volleyball-home',
    loadChildren: () => import('./volleyball-home/volleyball-home.module').then( m => m.VolleyballHomePageModule)
  },
  {
    path: 'volleyball-rules',
    loadChildren: () => import('./volleyball-rules/volleyball-rules.module').then( m => m.VolleyballRulesPageModule)
  },
  {
    path: 'volleyball-videos',
    loadChildren: () => import('./volleyball-videos/volleyball-videos.module').then( m => m.VolleyballVideosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballPageRoutingModule {}
