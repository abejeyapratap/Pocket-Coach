import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerVideosPageRoutingModule } from './soccer-videos-routing.module';

import { SoccerVideosPage } from './soccer-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerVideosPageRoutingModule
  ],
  declarations: [SoccerVideosPage]
})
export class SoccerVideosPageModule {}
