import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballSizePageRoutingModule } from './volleyball-size-routing.module';

import { VolleyballSizePage } from './volleyball-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballSizePageRoutingModule
  ],
  declarations: [VolleyballSizePage]
})
export class VolleyballSizePageModule {}
