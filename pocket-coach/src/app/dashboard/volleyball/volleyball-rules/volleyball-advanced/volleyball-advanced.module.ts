import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballAdvancedPageRoutingModule } from './volleyball-advanced-routing.module';

import { VolleyballAdvancedPage } from './volleyball-advanced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballAdvancedPageRoutingModule
  ],
  declarations: [VolleyballAdvancedPage]
})
export class VolleyballAdvancedPageModule {}
