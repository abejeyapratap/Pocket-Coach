import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisServingPageRoutingModule } from './tennis-serving-routing.module';

import { TennisServingPage } from './tennis-serving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisServingPageRoutingModule
  ],
  declarations: [TennisServingPage]
})
export class TennisServingPageModule {}
