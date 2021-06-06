import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/dashboard/skills.model';
import { VolleyballSkillsService } from '../../volleyball-skills.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(private volleyballSkillsService: VolleyballSkillsService) {}

  ngOnInit() {
    this.currentSkill = this.volleyballSkillsService.getSkill('setting');
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
    this.volleyballSkillsService.changeProgress(
      this.currentSkill.skillId,
      evalTotal
    );

    if (evalTotal === this.currentSkill.skillDetailsObj.evalObj.length) {
      console.log(evalTotal);
    }
    // this.currentTotal.emit({ id: this.currentSkill.skillId, total: evalTotal });
  }
}