import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisSkillsPage } from './tennis-skills.page';

const routes: Routes = [
  {
    path: '',
    component: TennisSkillsPage,
  },
  {
    path: 'serving',
    loadChildren: () =>
      import('./serving/serving.module').then((m) => m.ServingPageModule),
  },
  {
    path: 'forehand',
    loadChildren: () =>
      import('./forehand/forehand.module').then((m) => m.ForehandPageModule),
  },
  {
    path: 'backhand',
    loadChildren: () =>
      import('./backhand/backhand.module').then((m) => m.BackhandPageModule),
  },
  /*   {
    path: ':skillId',
    loadChildren: () =>
      import('./tennis-details/tennis-details.module').then(
        (m) => m.TennisDetailsPageModule
      ),
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisSkillsPageRoutingModule {}
