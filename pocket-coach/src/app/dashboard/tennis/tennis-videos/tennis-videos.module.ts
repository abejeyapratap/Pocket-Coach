import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisVideosPageRoutingModule } from './tennis-videos-routing.module';

import { TennisVideosPage } from './tennis-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisVideosPageRoutingModule
  ],
  declarations: [TennisVideosPage]
})
export class TennisVideosPageModule {}
