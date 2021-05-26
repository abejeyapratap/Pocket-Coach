import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoccerGuidesPage } from './soccer-guides.page';

const routes: Routes = [
  {
    path: '',
    component: SoccerGuidesPage
  },
  {
    path: 'soccer-size',
    loadChildren: () => import('./soccer-size/soccer-size.module').then( m => m.SoccerSizePageModule)
  },
  {
    path: 'soccer-equipment',
    loadChildren: () => import('./soccer-equipment/soccer-equipment.module').then( m => m.SoccerEquipmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoccerGuidesPageRoutingModule {}
