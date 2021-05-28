import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/dashboard/skills.model';
import { BasketballSkillsService } from '../../basketball-skills.service';

@Component({
  selector: 'app-passing',
  templateUrl: './passing.page.html',
  styleUrls: ['./passing.page.scss'],
})
export class PassingPage implements OnInit {
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(private basketballSkillsService: BasketballSkillsService) {}

  ngOnInit() {
    this.currentSkill = this.basketballSkillsService.getSkill('passing');
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
    this.basketballSkillsService.changeProgress(this.currentSkill.skillId, evalTotal);

    if (evalTotal === this.currentSkill.skillDetailsObj.evalObj.length) {
      console.log(evalTotal);
    }
    // this.currentTotal.emit({ id: this.currentSkill.skillId, total: evalTotal });
  }
}
