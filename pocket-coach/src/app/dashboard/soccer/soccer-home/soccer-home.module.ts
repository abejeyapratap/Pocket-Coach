import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerHomePageRoutingModule } from './soccer-home-routing.module';

import { SoccerHomePage } from './soccer-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerHomePageRoutingModule
  ],
  declarations: [SoccerHomePage]
})
export class SoccerHomePageModule {}
