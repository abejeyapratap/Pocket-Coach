import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerDetailsPageRoutingModule } from './soccer-details-routing.module';

import { SoccerDetailsPage } from './soccer-details.page';
import { SoccerEvaluationComponent } from './soccer-evaluation/soccer-evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerDetailsPageRoutingModule,
  ],
  declarations: [SoccerDetailsPage, SoccerEvaluationComponent],
  entryComponents: [SoccerEvaluationComponent], // tells AG to prepare to render
})
export class SoccerDetailsPageModule {}
