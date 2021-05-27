import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisGuidesPage } from './tennis-guides.page';

const routes: Routes = [
  {
    path: '',
    component: TennisGuidesPage
  },
  {
    path: 'tennis-size',
    loadChildren: () => import('./tennis-size/tennis-size.module').then( m => m.TennisSizePageModule)
  },
  {
    path: 'tennis-equipment',
    loadChildren: () => import('./tennis-equipment/tennis-equipment.module').then( m => m.TennisEquipmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisGuidesPageRoutingModule {}
