import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BumpingPageRoutingModule } from './bumping-routing.module';

import { BumpingPage } from './bumping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BumpingPageRoutingModule
  ],
  declarations: [BumpingPage]
})
export class BumpingPageModule {}
