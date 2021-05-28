import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForehandPage } from './forehand.page';

const routes: Routes = [
  {
    path: '',
    component: ForehandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForehandPageRoutingModule {}
