import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/dashboard/skills.model';
import { SoccerSkillsService } from '../../soccer-skills.service';

@Component({
  selector: 'app-dribbling',
  templateUrl: './dribbling.page.html',
  styleUrls: ['./dribbling.page.scss'],
})
export class DribblingPage implements OnInit {
  // @Output() currentTotal = new EventEmitter<{ id: string; total: number }>();
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

    // console.log(evalTotal);
    this.soccerSkillsService.changeProgress(this.currentSkill.skillId, evalTotal);

    if (evalTotal === this.currentSkill.skillDetailsObj.evalObj.length) {
      console.log(evalTotal);
    }
    // this.currentTotal.emit({ id: this.currentSkill.skillId, total: evalTotal });
  }
}
