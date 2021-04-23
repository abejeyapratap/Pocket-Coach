import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerHomePage } from './soccer-home.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerHomePageRoutingModule {}
