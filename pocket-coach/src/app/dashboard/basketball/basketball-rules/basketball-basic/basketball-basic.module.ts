import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballBasicPageRoutingModule } from './basketball-basic-routing.module';

import { BasketballBasicPage } from './basketball-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballBasicPageRoutingModule
  ],
  declarations: [BasketballBasicPage]
})
export class BasketballBasicPageModule {}
