import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballRulesPageRoutingModule } from './volleyball-rules-routing.module';

import { VolleyballRulesPage } from './volleyball-rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballRulesPageRoutingModule
  ],
  declarations: [VolleyballRulesPage]
})
export class VolleyballRulesPageModule {}
