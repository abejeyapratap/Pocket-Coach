import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballSkillsPage } from './volleyball-skills.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballSkillsPage,
  },
  {
    path: 'bumping',
    loadChildren: () =>
      import('./bumping/bumping.module').then((m) => m.BumpingPageModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingPageModule),
  },
  {
    path: 'hitting',
    loadChildren: () =>
      import('./hitting/hitting.module').then((m) => m.HittingPageModule),
  },
  {
    path: 'serving',
    loadChildren: () =>
      import('./serving/serving.module').then((m) => m.ServingPageModule),
  },
  /*   {
      path: ':skillId',
      loadChildren: () =>
        import('./volleyball-details/volleyball-details.module').then(
          (m) => m.VolleyballDetailsPageModule
        ),
    }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballSkillsPageRoutingModule {}
