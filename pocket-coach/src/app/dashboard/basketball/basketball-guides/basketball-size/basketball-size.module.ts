import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballSizePageRoutingModule } from './basketball-size-routing.module';

import { BasketballSizePage } from './basketball-size.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballSizePageRoutingModule
  ],
  declarations: [BasketballSizePage]
})
export class BasketballSizePageModule {}
