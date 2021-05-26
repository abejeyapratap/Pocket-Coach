import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentDetailsPageRoutingModule } from './equipment-details-routing.module';

import { EquipmentDetailsPage } from './equipment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentDetailsPageRoutingModule
  ],
  declarations: [EquipmentDetailsPage]
})
export class EquipmentDetailsPageModule {}
