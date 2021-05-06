import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisSkillsPageRoutingModule } from './tennis-skills-routing.module';

import { TennisSkillsPage } from './tennis-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisSkillsPageRoutingModule
  ],
  declarations: [TennisSkillsPage]
})
export class TennisSkillsPageModule {}
