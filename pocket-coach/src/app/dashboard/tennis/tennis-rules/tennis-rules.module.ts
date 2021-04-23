import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisRulesPageRoutingModule } from './tennis-rules-routing.module';

import { TennisRulesPage } from './tennis-rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisRulesPageRoutingModule
  ],
  declarations: [TennisRulesPage]
})
export class TennisRulesPageModule {}
