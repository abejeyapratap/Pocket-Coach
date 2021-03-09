import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerPageRoutingModule } from './soccer-routing.module';

import { SoccerPage } from './soccer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerPageRoutingModule
  ],
  declarations: [SoccerPage]
})
export class SoccerPageModule {}
