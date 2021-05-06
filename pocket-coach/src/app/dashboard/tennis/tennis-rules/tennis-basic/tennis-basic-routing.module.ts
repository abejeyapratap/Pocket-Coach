import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisBasicPage } from './tennis-basic.page';

const routes: Routes = [
  {
    path: '',
    component: TennisBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisBasicPageRoutingModule {}
