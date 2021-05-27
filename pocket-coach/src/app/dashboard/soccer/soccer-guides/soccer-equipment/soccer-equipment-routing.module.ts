/**
 * File name: soccer-equipment-routing.module.ts
 * Purpose: Routing configuration for sports equipment
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerEquipmentPage } from './soccer-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerEquipmentPage,
  },
  {
    path: ':equipId',
    loadChildren: () =>
      import('./soccer-equipment-info/soccer-equipment-info.module').then(
        (m) => m.SoccerEquipmentInfoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerEquipmentPageRoutingModule {}
