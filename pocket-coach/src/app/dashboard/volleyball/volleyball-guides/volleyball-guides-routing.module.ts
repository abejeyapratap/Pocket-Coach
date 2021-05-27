import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolleyballGuidesPage } from './volleyball-guides.page';

const routes: Routes = [
  {
    path: '',
    component: VolleyballGuidesPage
  },
  {
    path: 'volleyball-size',
    loadChildren: () => import('./volleyball-size/volleyball-size.module').then( m => m.VolleyballSizePageModule)
  },
  {
    path: 'volleyball-equipment',
    loadChildren: () => import('./volleyball-equipment/volleyball-equipment.module').then( m => m.VolleyballEquipmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolleyballGuidesPageRoutingModule {}
