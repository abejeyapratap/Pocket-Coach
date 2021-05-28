import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShootingPageRoutingModule } from './shooting-routing.module';

import { ShootingPage } from './shooting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShootingPageRoutingModule
  ],
  declarations: [ShootingPage]
})
export class ShootingPageModule {}
