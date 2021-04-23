import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisHomePageRoutingModule } from './tennis-home-routing.module';

import { TennisHomePage } from './tennis-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisHomePageRoutingModule
  ],
  declarations: [TennisHomePage]
})
export class TennisHomePageModule {}
