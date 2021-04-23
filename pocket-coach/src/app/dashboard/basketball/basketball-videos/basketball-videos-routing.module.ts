import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballVideosPage } from './basketball-videos.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballVideosPageRoutingModule {}
