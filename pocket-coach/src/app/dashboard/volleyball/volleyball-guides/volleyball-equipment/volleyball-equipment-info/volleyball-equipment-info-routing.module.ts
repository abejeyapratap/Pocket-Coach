import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballEquipmentInfoPage } from './volleyball-equipment-info.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballEquipmentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballEquipmentInfoPageRoutingModule {}
