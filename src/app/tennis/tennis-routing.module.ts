import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisPage } from './tennis.page';

const routes: Routes = [
  {
    path: '',
    component: TennisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisPageRoutingModule {}
