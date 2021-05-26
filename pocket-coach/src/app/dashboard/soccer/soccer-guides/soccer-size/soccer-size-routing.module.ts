import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerSizePage } from './soccer-size.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerSizePageRoutingModule {}
