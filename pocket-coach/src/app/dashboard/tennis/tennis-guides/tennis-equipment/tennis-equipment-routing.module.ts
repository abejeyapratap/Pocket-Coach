/**
 * File name: tennis-equipment-routing.module.ts
 * Purpose: Routing configuration for sports equipment
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisEquipmentPage } from './tennis-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: TennisEquipmentPage,
  },
  {
    path: ':equipId',
    loadChildren: () =>
      import('./tennis-equipment-info/tennis-equipment-info.module').then(
        (m) => m.TennisEquipmentInfoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisEquipmentPageRoutingModule {}
