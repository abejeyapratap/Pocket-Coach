import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisEquipmentPage } from './tennis-equipment.page';

const routes: Routes = [
  {
    path: '',
    component: TennisEquipmentPage
  },
  {
    path: 'tennis-equipment-info',
    loadChildren: () => import('./tennis-equipment-info/tennis-equipment-info.module').then( m => m.TennisEquipmentInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisEquipmentPageRoutingModule {}
