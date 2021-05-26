import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerEquipmentInfoPage } from './soccer-equipment-info.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerEquipmentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerEquipmentInfoPageRoutingModule {}
