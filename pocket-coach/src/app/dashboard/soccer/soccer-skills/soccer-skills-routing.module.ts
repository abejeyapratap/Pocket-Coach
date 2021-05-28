import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerSkillsPage } from './soccer-skills.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerSkillsPage,
  },
  {
    path: 'dribbling',
    loadChildren: () =>
      import('./dribbling/dribbling.module').then((m) => m.DribblingPageModule),
  },
  {
    path: 'passing',
    loadChildren: () =>
      import('./passing/passing.module').then((m) => m.PassingPageModule),
  },
  {
    path: 'shooting',
    loadChildren: () =>
      import('./shooting/shooting.module').then((m) => m.ShootingPageModule),
  },
/*   {
    path: ':skillId',
    loadChildren: () =>
      import('./soccer-details/soccer-details.module').then(
        (m) => m.SoccerDetailsPageModule
      ),
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerSkillsPageRoutingModule {}
