import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballVideosPageRoutingModule } from './volleyball-videos-routing.module';

import { VolleyballVideosPage } from './volleyball-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballVideosPageRoutingModule
  ],
  declarations: [VolleyballVideosPage]
})
export class VolleyballVideosPageModule {}
