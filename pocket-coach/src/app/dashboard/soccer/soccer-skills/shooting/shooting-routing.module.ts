import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShootingPage } from './shooting.page';

const routes: Routes = [
  {
    path: '',
    component: ShootingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShootingPageRoutingModule {}
