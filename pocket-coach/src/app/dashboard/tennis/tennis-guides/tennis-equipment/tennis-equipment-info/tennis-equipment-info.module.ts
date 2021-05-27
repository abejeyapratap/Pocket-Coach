import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisEquipmentInfoPageRoutingModule } from './tennis-equipment-info-routing.module';

import { TennisEquipmentInfoPage } from './tennis-equipment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisEquipmentInfoPageRoutingModule
  ],
  declarations: [TennisEquipmentInfoPage]
})
export class TennisEquipmentInfoPageModule {}
