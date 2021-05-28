import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DribblingPageRoutingModule } from './dribbling-routing.module';

import { DribblingPage } from './dribbling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DribblingPageRoutingModule
  ],
  declarations: [DribblingPage]
})
export class DribblingPageModule {}
