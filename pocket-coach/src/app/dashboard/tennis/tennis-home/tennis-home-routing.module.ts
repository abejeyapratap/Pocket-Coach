import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisHomePage } from './tennis-home.page';

const routes: Routes = [
  {
    path: '',
    component: TennisHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisHomePageRoutingModule {}
