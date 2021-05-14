/**
 * File name: soccer-routing.moudle.ts
 * Purpose: Routing configuration for each tab in the tabs layout
 * Date: 5/14/21
 * Author(s): Abe Jeyapratap
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerPage } from './soccer.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: SoccerPage,
    children: [
      {
        path: 'soccer-home',
        loadChildren: () =>
          import('./soccer-home/soccer-home.module').then(
            (m) => m.SoccerHomePageModule
          ),
      },
      {
        path: 'soccer-rules',
        loadChildren: () =>
          import('./soccer-rules/soccer-rules.module').then(
            (m) => m.SoccerRulesPageModule
          ),
      },
      {
        path: 'soccer-videos',
        loadChildren: () =>
          import('./soccer-videos/soccer-videos.module').then(
            (m) => m.SoccerVideosPageModule
          ),
      },
      {
        path: 'soccer-skills',
        loadChildren: () =>
          import('./soccer-skills/soccer-skills.module').then(
            (m) => m.SoccerSkillsPageModule
          ),
      },
      {
        path: 'soccer-guides',
        loadChildren: () =>
          import('./soccer-guides/soccer-guides.module').then(
            (m) => m.SoccerGuidesPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/soccer/tabs/soccer-home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/soccer/tabs/soccer-home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerPageRoutingModule {}
