import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketballGuidesPage } from './basketball-guides.page';

const routes: Routes = [
  {
    path: '',
    component: BasketballGuidesPage
  },
  {
    path: 'basketball-size',
    loadChildren: () => import('./basketball-size/basketball-size.module').then( m => m.BasketballSizePageModule)
  },
  {
    path: 'basketball-equipment',
    loadChildren: () => import('./basketball-equipment/basketball-equipment.module').then( m => m.BasketballEquipmentPageModule)
  },
  {
    path: 'basketball-equipment-info',
    loadChildren: () => import('./basketball-equipment-info/basketball-equipment-info.module').then( m => m.BasketballEquipmentInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketballGuidesPageRoutingModule {}
