import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisGuidesPage } from './tennis-guides.page';

const routes: Routes = [
  {
    path: '',
    component: TennisGuidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisGuidesPageRoutingModule {}
