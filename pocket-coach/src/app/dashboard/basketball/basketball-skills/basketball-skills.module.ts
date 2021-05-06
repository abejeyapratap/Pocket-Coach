import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketballSkillsPageRoutingModule } from './basketball-skills-routing.module';

import { BasketballSkillsPage } from './basketball-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketballSkillsPageRoutingModule
  ],
  declarations: [BasketballSkillsPage]
})
export class BasketballSkillsPageModule {}
