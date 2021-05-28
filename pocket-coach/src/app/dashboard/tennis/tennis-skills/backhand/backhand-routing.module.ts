import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackhandPage } from './backhand.page';

const routes: Routes = [
  {
    path: '',
    component: BackhandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackhandPageRoutingModule {}
