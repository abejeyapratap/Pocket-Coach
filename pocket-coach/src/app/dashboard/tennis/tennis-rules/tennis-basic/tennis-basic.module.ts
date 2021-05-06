import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisBasicPageRoutingModule } from './tennis-basic-routing.module';

import { TennisBasicPage } from './tennis-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisBasicPageRoutingModule
  ],
  declarations: [TennisBasicPage]
})
export class TennisBasicPageModule {}
