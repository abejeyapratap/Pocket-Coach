import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerEquipmentPageRoutingModule } from './soccer-equipment-routing.module';

import { SoccerEquipmentPage } from './soccer-equipment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerEquipmentPageRoutingModule
  ],
  declarations: [SoccerEquipmentPage]
})
export class SoccerEquipmentPageModule {}
