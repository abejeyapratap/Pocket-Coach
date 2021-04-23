import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballVideosPageRoutingModule } from './basketball-videos-routing.module';

import { BasketballVideosPage } from './basketball-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballVideosPageRoutingModule
  ],
  declarations: [BasketballVideosPage]
})
export class BasketballVideosPageModule {}
