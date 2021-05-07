import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisDetailsPageRoutingModule } from './tennis-details-routing.module';

import { TennisDetailsPage } from './tennis-details.page';
import { TennisEvaluationComponent } from './tennis-evaluation/tennis-evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisDetailsPageRoutingModule,
  ],
  declarations: [TennisDetailsPage, TennisEvaluationComponent],
  entryComponents: [TennisEvaluationComponent],
})
export class TennisDetailsPageModule {}
