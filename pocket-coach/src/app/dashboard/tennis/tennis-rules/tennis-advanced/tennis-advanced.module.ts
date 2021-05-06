import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisAdvancedPageRoutingModule } from './tennis-advanced-routing.module';

import { TennisAdvancedPage } from './tennis-advanced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisAdvancedPageRoutingModule
  ],
  declarations: [TennisAdvancedPage]
})
export class TennisAdvancedPageModule {}
