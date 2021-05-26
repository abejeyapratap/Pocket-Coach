import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerEquipmentPage } from './soccer-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerEquipmentPage,
  },
  {
    path: ':equipDetailId',
    loadChildren: () =>
      import('./equipment-details/equipment-details.module').then(
        (m) => m.EquipmentDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerEquipmentPageRoutingModule {}
