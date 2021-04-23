import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballVideosPage } from './volleyball-videos.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballVideosPageRoutingModule {}
