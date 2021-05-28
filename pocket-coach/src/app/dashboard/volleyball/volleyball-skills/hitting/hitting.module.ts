import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HittingPageRoutingModule } from './hitting-routing.module';

import { HittingPage } from './hitting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HittingPageRoutingModule
  ],
  declarations: [HittingPage]
})
export class HittingPageModule {}
