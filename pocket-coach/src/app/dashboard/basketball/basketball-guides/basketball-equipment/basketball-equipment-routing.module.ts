/**
 * File name: basketball-equipment-routing.module.ts
 * Purpose: Routing configuration for sports equipment
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballEquipmentPage } from './basketball-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballEquipmentPage,
  },
  {
    path: ':equipId',
    loadChildren: () =>
      import(
        './basketball-equipment-info/basketball-equipment-info.module'
      ).then((m) => m.BasketballEquipmentInfoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballEquipmentPageRoutingModule {}
