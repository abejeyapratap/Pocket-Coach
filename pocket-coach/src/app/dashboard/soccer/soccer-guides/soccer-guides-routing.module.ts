import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerGuidesPage } from './soccer-guides.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerGuidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerGuidesPageRoutingModule {}
