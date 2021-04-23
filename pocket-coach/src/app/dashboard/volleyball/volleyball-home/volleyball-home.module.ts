import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballHomePageRoutingModule } from './volleyball-home-routing.module';

import { VolleyballHomePage } from './volleyball-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballHomePageRoutingModule
  ],
  declarations: [VolleyballHomePage]
})
export class VolleyballHomePageModule {}
