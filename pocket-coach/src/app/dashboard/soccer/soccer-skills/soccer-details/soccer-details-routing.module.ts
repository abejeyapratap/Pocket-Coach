import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerDetailsPage } from './soccer-details.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerDetailsPageRoutingModule {}
