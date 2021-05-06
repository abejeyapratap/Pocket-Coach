import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerAdvancedPageRoutingModule } from './soccer-advanced-routing.module';

import { SoccerAdvancedPage } from './soccer-advanced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerAdvancedPageRoutingModule
  ],
  declarations: [SoccerAdvancedPage]
})
export class SoccerAdvancedPageModule {}
