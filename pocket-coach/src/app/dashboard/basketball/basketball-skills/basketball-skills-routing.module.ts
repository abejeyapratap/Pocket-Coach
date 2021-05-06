import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballSkillsPage } from './basketball-skills.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballSkillsPageRoutingModule {}
