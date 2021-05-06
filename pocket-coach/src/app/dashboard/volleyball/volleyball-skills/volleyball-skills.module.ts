import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolleyballSkillsPageRoutingModule } from './volleyball-skills-routing.module';

import { VolleyballSkillsPage } from './volleyball-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolleyballSkillsPageRoutingModule
  ],
  declarations: [VolleyballSkillsPage]
})
export class VolleyballSkillsPageModule {}
