import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisSkillsPage } from './tennis-skills.page';

const routes: Routes = [
  {
    path: '',
    component: TennisSkillsPage
  },
  {
    path: 'tennis-details',
    loadChildren: () => import('./tennis-details/tennis-details.module').then( m => m.TennisDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisSkillsPageRoutingModule {}
