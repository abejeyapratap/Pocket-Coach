import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballPageRoutingModule } from './volleyball-routing.module';

import { VolleyballPage } from './volleyball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballPageRoutingModule
  ],
  declarations: [VolleyballPage]
})
export class VolleyballPageModule {}
