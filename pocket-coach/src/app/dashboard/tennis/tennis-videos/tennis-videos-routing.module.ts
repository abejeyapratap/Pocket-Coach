import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisVideosPage } from './tennis-videos.page';

const routes: Routes = [
  {
    path: '',
    component: TennisVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisVideosPageRoutingModule {}
