import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassingPageRoutingModule } from './passing-routing.module';

import { PassingPage } from './passing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassingPageRoutingModule
  ],
  declarations: [PassingPage]
})
export class PassingPageModule {}
