import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerDetailsPageRoutingModule } from './soccer-details-routing.module';

import { SoccerDetailsPage } from './soccer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerDetailsPageRoutingModule
  ],
  declarations: [SoccerDetailsPage]
})
export class SoccerDetailsPageModule {}
