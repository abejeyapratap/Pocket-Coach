import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerBasicPageRoutingModule } from './soccer-basic-routing.module';

import { SoccerBasicPage } from './soccer-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerBasicPageRoutingModule
  ],
  declarations: [SoccerBasicPage]
})
export class SoccerBasicPageModule {}
