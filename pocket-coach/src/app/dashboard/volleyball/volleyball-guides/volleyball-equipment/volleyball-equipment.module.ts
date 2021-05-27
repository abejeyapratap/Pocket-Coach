import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballEquipmentPageRoutingModule } from './volleyball-equipment-routing.module';

import { VolleyballEquipmentPage } from './volleyball-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballEquipmentPageRoutingModule
  ],
  declarations: [VolleyballEquipmentPage]
})
export class VolleyballEquipmentPageModule {}
