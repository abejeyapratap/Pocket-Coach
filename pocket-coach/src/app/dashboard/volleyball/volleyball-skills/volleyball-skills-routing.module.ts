import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballSkillsPage } from './volleyball-skills.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballSkillsPageRoutingModule {}
