/**
 * File name: backhand.page.ts
 * Purpose: handles the functionality for the backhand skill in tennis
 * Date: 5/28/21
 * Author(s): Abe Jeyapratap
 */
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/dashboard/skills.model';
import { TennisSkillsService } from '../../tennis-skills.service';

@Component({
  selector: 'app-backhand',
  templateUrl: './backhand.page.html',
  styleUrls: ['./backhand.page.scss'],
})
export class BackhandPage implements OnInit {
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(private tennisSkillsService: TennisSkillsService) {}

  ngOnInit() {
    this.currentSkill = this.tennisSkillsService.getSkill('backhand');
  }

  onSegmentChange(event: any) {
    this.currentSegment = event.detail.value;
  }

  onToggleCheck() {
    let evalTotal = 0;

    this.currentSkill.skillDetailsObj.evalObj.map((item) => {
      if (item.toggle) {
        evalTotal += 1;
      }
    });

    // console.log(evalTotal);
    this.tennisSkillsService.changeProgress(this.currentSkill.skillId, evalTotal);

    if (evalTotal === this.currentSkill.skillDetailsObj.evalObj.length) {
      console.log(evalTotal);
    }
    // this.currentTotal.emit({ id: this.currentSkill.skillId, total: evalTotal });
  }
}
