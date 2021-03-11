import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballRulesPageRoutingModule } from './basketball-rules-routing.module';

import { BasketballRulesPage } from './basketball-rules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballRulesPageRoutingModule
  ],
  declarations: [BasketballRulesPage]
})
export class BasketballRulesPageModule {}
