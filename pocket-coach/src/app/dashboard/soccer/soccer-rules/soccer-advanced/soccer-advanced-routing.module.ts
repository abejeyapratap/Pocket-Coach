import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerAdvancedPage } from './soccer-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerAdvancedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerAdvancedPageRoutingModule {}
