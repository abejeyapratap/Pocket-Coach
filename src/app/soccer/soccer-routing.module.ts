import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerPage } from './soccer.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerPageRoutingModule {}
