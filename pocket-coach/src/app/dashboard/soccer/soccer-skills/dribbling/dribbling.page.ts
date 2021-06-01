/**
 * File name: ddribbling.page.ts
 * Purpose: Skills fetching with progression update logic
 * Date: 5/28/21
 * Author(s): Abe Jeyapratap
 */
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/dashboard/skills.model';
import { SoccerSkillsService } from '../../soccer-skills.service';

@Component({
  selector: 'app-dribbling',
  templateUrl: './dribbling.page.html',
  styleUrls: ['./dribbling.page.scss'],
})
export class DribblingPage implements OnInit {
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(private soccerSkillsService: SoccerSkillsService) {}

  ngOnInit() {
    this.currentSkill = this.soccerSkillsService.getSkill('dribbling');
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
    this.soccerSkillsService.changeProgress(
      this.currentSkill.skillId,
      evalTotal
    );
  }
}
