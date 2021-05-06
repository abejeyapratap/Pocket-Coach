import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballBasicPageRoutingModule } from './volleyball-basic-routing.module';

import { VolleyballBasicPage } from './volleyball-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballBasicPageRoutingModule
  ],
  declarations: [VolleyballBasicPage]
})
export class VolleyballBasicPageModule {}
