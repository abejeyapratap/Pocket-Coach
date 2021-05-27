import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballEquipmentInfoPageRoutingModule } from './basketball-equipment-info-routing.module';

import { BasketballEquipmentInfoPage } from './basketball-equipment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballEquipmentInfoPageRoutingModule
  ],
  declarations: [BasketballEquipmentInfoPage]
})
export class BasketballEquipmentInfoPageModule {}
