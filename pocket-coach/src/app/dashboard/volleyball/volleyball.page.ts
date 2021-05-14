/**
 * File name: volleyball.page.ts
 * Purpose: Volleyball Tabs layout (w/ Skill count)
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';
import { VolleyballSkillsService } from './volleyball-skills.service';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.page.html',
  styleUrls: ['./volleyball.page.scss'],
})
export class VolleyballPage implements OnInit {
  numSkills: number;

  constructor(private volleyballSkillsService: VolleyballSkillsService) {}

  ngOnInit() {
    this.numSkills = this.volleyballSkillsService.countSkills();
  }
}
