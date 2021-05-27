import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisEquipmentInfoPage } from './tennis-equipment-info.page';

const routes: Routes = [
  {
    path: '',
    component: TennisEquipmentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisEquipmentInfoPageRoutingModule {}
