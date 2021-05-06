import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisPage } from './tennis.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TennisPage,
    children: [
      {
        path: 'tennis-home',
        loadChildren: () =>
          import('./tennis-home/tennis-home.module').then(
            (m) => m.TennisHomePageModule
          ),
      },
      {
        path: 'tennis-rules',
        loadChildren: () =>
          import('./tennis-rules/tennis-rules.module').then(
            (m) => m.TennisRulesPageModule
          ),
      },
      {
        path: 'tennis-videos',
        loadChildren: () =>
          import('./tennis-videos/tennis-videos.module').then(
            (m) => m.TennisVideosPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/tennis/tabs/tennis-home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/tennis/tabs/tennis-home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisPageRoutingModule {}