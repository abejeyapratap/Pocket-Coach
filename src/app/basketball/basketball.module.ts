import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballPageRoutingModule } from './basketball-routing.module';

import { BasketballPage } from './basketball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballPageRoutingModule
  ],
  declarations: [BasketballPage]
})
export class BasketballPageModule {}
