import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisAdvancedPage } from './tennis-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: TennisAdvancedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisAdvancedPageRoutingModule {}
