import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoccerSkillsPageRoutingModule } from './soccer-skills-routing.module';

import { SoccerSkillsPage } from './soccer-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoccerSkillsPageRoutingModule
  ],
  declarations: [SoccerSkillsPage]
})
export class SoccerSkillsPageModule {}
