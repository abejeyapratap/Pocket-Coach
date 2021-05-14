/**
 * File name: basketball.page.ts
 * Purpose: Basketball Tabs layout (w/ Skill count)
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';
import { BasketballSkillsService } from './basketball-skills.service';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.page.html',
  styleUrls: ['./basketball.page.scss'],
})
export class BasketballPage implements OnInit {
  numSkills: number;

  constructor(private basketballSkillsService: BasketballSkillsService) {}

  ngOnInit() {
    this.numSkills = this.basketballSkillsService.countSkills();
  }
}
