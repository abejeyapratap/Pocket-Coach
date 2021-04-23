import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'basketball',
    loadChildren: () => import('./basketball/basketball.module').then( m => m.BasketballPageModule)
  },
  {
    path: 'soccer',
    loadChildren: () => import('./soccer/soccer.module').then( m => m.SoccerPageModule)
  },
  {
    path: 'tennis',
    loadChildren: () => import('./tennis/tennis.module').then( m => m.TennisPageModule)
  },
  {
    path: 'volleyball',
    loadChildren: () => import('./volleyball/volleyball.module').then( m => m.VolleyballPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
