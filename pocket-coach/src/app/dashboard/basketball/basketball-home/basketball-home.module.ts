import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballHomePageRoutingModule } from './basketball-home-routing.module';

import { BasketballHomePage } from './basketball-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballHomePageRoutingModule
  ],
  declarations: [BasketballHomePage]
})
export class BasketballHomePageModule {}
