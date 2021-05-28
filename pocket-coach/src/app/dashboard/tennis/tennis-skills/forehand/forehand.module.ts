import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForehandPageRoutingModule } from './forehand-routing.module';

import { ForehandPage } from './forehand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForehandPageRoutingModule
  ],
  declarations: [ForehandPage]
})
export class ForehandPageModule {}
