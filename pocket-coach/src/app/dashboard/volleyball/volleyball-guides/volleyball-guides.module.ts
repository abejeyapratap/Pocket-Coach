import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballGuidesPageRoutingModule } from './volleyball-guides-routing.module';

import { VolleyballGuidesPage } from './volleyball-guides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballGuidesPageRoutingModule
  ],
  declarations: [VolleyballGuidesPage]
})
export class VolleyballGuidesPageModule {}
