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
  currentSegment = 'eval';

  constructor(private soccerSkillsService: SoccerSkillsService) {}

  ngOnInit() {
    this.currentSkill = this.soccerSkillsService.getSkill('dribbling');
    console.log(this.currentSkill.skillName);
  }

  onSegmentChange(event: any) {
    this.currentSegment = event.detail.value;
  }

  onToggleCheck() {

  }
}
