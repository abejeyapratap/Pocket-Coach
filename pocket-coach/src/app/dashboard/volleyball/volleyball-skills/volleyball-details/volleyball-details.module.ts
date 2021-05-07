import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballDetailsPageRoutingModule } from './volleyball-details-routing.module';

import { VolleyballDetailsPage } from './volleyball-details.page';
import { VolleyballEvaluationComponent } from './volleyball-evaluation/volleyball-evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballDetailsPageRoutingModule,
  ],
  declarations: [VolleyballDetailsPage, VolleyballEvaluationComponent],
  entryComponents: [VolleyballEvaluationComponent],
})
export class VolleyballDetailsPageModule {}
