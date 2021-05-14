/**
 * File name: tennis.page.ts
 * Purpose: Tennis Tabs layout (w/ Skill count)
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';
import { TennisSkillsService } from './tennis-skills.service';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.page.html',
  styleUrls: ['./tennis.page.scss'],
})
export class TennisPage implements OnInit {
  numSkills: number;

  constructor(private tennisSkillsService: TennisSkillsService) {}

  ngOnInit() {
    this.numSkills = this.tennisSkillsService.countSkills();
  }
}
