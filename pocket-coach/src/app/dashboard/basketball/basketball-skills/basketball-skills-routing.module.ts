import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballSkillsPage } from './basketball-skills.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballSkillsPage,
  },
  {
    path: 'dribbling',
    loadChildren: () =>
      import('./dribbling/dribbling.module').then((m) => m.DribblingPageModule),
  },
  {
    path: 'shooting',
    loadChildren: () =>
      import('./shooting/shooting.module').then((m) => m.ShootingPageModule),
  },
  {
    path: 'passing',
    loadChildren: () =>
      import('./passing/passing.module').then((m) => m.PassingPageModule),
  },
  /*   {
    path: ':skillId',
    loadChildren: () =>
      import('./basketball-details/basketball-details.module').then(
        (m) => m.BasketballDetailsPageModule
      ),
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballSkillsPageRoutingModule {}
