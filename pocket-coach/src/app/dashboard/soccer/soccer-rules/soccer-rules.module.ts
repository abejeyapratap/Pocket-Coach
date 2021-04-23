import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerRulesPageRoutingModule } from './soccer-rules-routing.module';

import { SoccerRulesPage } from './soccer-rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerRulesPageRoutingModule
  ],
  declarations: [SoccerRulesPage]
})
export class SoccerRulesPageModule {}
