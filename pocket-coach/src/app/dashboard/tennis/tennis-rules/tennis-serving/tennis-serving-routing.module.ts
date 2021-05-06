import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisServingPage } from './tennis-serving.page';

const routes: Routes = [
  {
    path: '',
    component: TennisServingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisServingPageRoutingModule {}
