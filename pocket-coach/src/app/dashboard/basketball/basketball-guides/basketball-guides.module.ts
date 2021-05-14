import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballGuidesPageRoutingModule } from './basketball-guides-routing.module';

import { BasketballGuidesPage } from './basketball-guides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballGuidesPageRoutingModule
  ],
  declarations: [BasketballGuidesPage]
})
export class BasketballGuidesPageModule {}
