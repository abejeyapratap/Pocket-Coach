import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackhandPageRoutingModule } from './backhand-routing.module';

import { BackhandPage } from './backhand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackhandPageRoutingModule
  ],
  declarations: [BackhandPage]
})
export class BackhandPageModule {}
