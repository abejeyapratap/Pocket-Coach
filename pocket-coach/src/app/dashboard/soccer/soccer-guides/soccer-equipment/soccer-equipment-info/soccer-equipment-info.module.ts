import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerEquipmentInfoPageRoutingModule } from './soccer-equipment-info-routing.module';

import { SoccerEquipmentInfoPage } from './soccer-equipment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerEquipmentInfoPageRoutingModule
  ],
  declarations: [SoccerEquipmentInfoPage]
})
export class SoccerEquipmentInfoPageModule {}
