/**
 * File name: soccer.page.ts
 * Purpose: Soccer Tabs layout (w/ Skill count)
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';
import { SoccerSkillsService } from './soccer-skills.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.page.html',
  styleUrls: ['./soccer.page.scss'],
})
export class SoccerPage implements OnInit {
  numSkills: number;

  constructor(private soccerSkillsService: SoccerSkillsService) {}

  ngOnInit() {
    this.numSkills = this.soccerSkillsService.countSkills();
  }
}
