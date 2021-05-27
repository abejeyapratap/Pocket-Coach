import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballEquipmentPageRoutingModule } from './basketball-equipment-routing.module';

import { BasketballEquipmentPage } from './basketball-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballEquipmentPageRoutingModule
  ],
  declarations: [BasketballEquipmentPage]
})
export class BasketballEquipmentPageModule {}
