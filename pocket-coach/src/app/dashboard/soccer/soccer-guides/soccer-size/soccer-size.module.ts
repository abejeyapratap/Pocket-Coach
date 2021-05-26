import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerSizePageRoutingModule } from './soccer-size-routing.module';

import { SoccerSizePage } from './soccer-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerSizePageRoutingModule
  ],
  declarations: [SoccerSizePage]
})
export class SoccerSizePageModule {}
