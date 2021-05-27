import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballEquipmentInfoPageRoutingModule } from './volleyball-equipment-info-routing.module';

import { VolleyballEquipmentInfoPage } from './volleyball-equipment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballEquipmentInfoPageRoutingModule
  ],
  declarations: [VolleyballEquipmentInfoPage]
})
export class VolleyballEquipmentInfoPageModule {}
