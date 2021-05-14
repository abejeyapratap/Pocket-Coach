import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerGuidesPageRoutingModule } from './soccer-guides-routing.module';

import { SoccerGuidesPage } from './soccer-guides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerGuidesPageRoutingModule
  ],
  declarations: [SoccerGuidesPage]
})
export class SoccerGuidesPageModule {}
