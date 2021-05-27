import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisSizePage } from './tennis-size.page';

const routes: Routes = [
  {
    path: '',
    component: TennisSizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisSizePageRoutingModule {}
