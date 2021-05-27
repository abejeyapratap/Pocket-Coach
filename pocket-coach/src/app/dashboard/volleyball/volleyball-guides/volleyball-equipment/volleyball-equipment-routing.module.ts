/**
 * File name: volleyball-equipment-routing.module.ts
 * Purpose: Routing configuration for sports equipment
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballEquipmentPage } from './volleyball-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballEquipmentPage,
  },
  {
    path: ':equipId',
    loadChildren: () =>
      import(
        './volleyball-equipment-info/volleyball-equipment-info.module'
      ).then((m) => m.VolleyballEquipmentInfoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballEquipmentPageRoutingModule {}
