import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisGuidesPageRoutingModule } from './tennis-guides-routing.module';

import { TennisGuidesPage } from './tennis-guides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisGuidesPageRoutingModule
  ],
  declarations: [TennisGuidesPage]
})
export class TennisGuidesPageModule {}
