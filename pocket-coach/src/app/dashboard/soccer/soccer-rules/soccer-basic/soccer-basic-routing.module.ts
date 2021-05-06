import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerBasicPage } from './soccer-basic.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerBasicPageRoutingModule {}
