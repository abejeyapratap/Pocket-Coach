import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServingPageRoutingModule } from './serving-routing.module';

import { ServingPage } from './serving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServingPageRoutingModule
  ],
  declarations: [ServingPage]
})
export class ServingPageModule {}
