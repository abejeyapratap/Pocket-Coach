import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisSizePageRoutingModule } from './tennis-size-routing.module';

import { TennisSizePage } from './tennis-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisSizePageRoutingModule
  ],
  declarations: [TennisSizePage]
})
export class TennisSizePageModule {}
