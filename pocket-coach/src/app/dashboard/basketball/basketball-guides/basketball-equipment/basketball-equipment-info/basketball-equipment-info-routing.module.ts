import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballEquipmentInfoPage } from './basketball-equipment-info.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballEquipmentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballEquipmentInfoPageRoutingModule {}
