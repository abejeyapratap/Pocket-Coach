import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballSkillsPage } from './volleyball-skills.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballSkillsPage
  },
  {
    path: 'volleyball-details',
    loadChildren: () => import('./volleyball-details/volleyball-details.module').then( m => m.VolleyballDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballSkillsPageRoutingModule {}
