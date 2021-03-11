import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'volleyball',
    loadChildren: () => import('./volleyball/volleyball.module').then( m => m.VolleyballPageModule)
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
    path: 'basketball',
    loadChildren: () => import('./basketball/basketball.module').then( m => m.BasketballPageModule)
  },
  {
    path: 'volleyball-rules',
    loadChildren: () => import('./volleyball-rules/volleyball-rules.module').then( m => m.VolleyballRulesPageModule)
  },
  {
    path: 'tennis-rules',
    loadChildren: () => import('./tennis-rules/tennis-rules.module').then( m => m.TennisRulesPageModule)
  },
  {
    path: 'soccer-rules',
    loadChildren: () => import('./soccer-rules/soccer-rules.module').then( m => m.SoccerRulesPageModule)
  },
  {
    path: 'basketball-rules',
    loadChildren: () => import('./basketball-rules/basketball-rules.module').then( m => m.BasketballRulesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
