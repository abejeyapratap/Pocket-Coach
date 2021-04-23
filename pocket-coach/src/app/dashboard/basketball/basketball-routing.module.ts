import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballPage } from './basketball.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BasketballPage,
    children: [
      {
        path: 'basketball-home',
        loadChildren: () =>
          import('./basketball-home/basketball-home.module').then(
            (m) => m.BasketballHomePageModule
          ),
      },
      {
        path: 'basketball-rules',
        loadChildren: () =>
          import('./basketball-rules/basketball-rules.module').then(
            (m) => m.BasketballRulesPageModule
          ),
      },
      {
        path: 'basketball-videos',
        loadChildren: () =>
          import('./basketball-videos/basketball-videos.module').then(
            (m) => m.BasketballVideosPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/basketball/tabs/basketball-home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/basketball/tabs/basketball-home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballPageRoutingModule {}
