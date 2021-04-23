import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerVideosPage } from './soccer-videos.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerVideosPageRoutingModule {}
