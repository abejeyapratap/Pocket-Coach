import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballDetailsPageRoutingModule } from './basketball-details-routing.module';

import { BasketballDetailsPage } from './basketball-details.page';
import { BasketballEvaluationComponent } from './basketball-evaluation/basketball-evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballDetailsPageRoutingModule
  ],
  declarations: [BasketballDetailsPage, BasketballEvaluationComponent],
  entryComponents: [BasketballEvaluationComponent]
})
export class BasketballDetailsPageModule {}
