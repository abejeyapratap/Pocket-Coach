import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoccerSkillsService } from '../../soccer-skills.service';
import { Skill, SkillDetails } from '../../../skills.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-soccer-details',
  templateUrl: './soccer-details.page.html',
  styleUrls: ['./soccer-details.page.scss'],
})
export class SoccerDetailsPage implements OnInit {
  // Display details for the Skill fetched
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(
    private route: ActivatedRoute,
    private soccerSkillsService: SoccerSkillsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('skillId')) {
        this.navCtrl.navigateBack('/dashboard/soccer/soccer-skills');
        return;
      }
      this.currentSkill = this.soccerSkillsService.getSkill(
        paramMap.get('skillId')
      );
    });
  }

  onSegmentChange(event: any) {
    this.currentSegment = event.detail.value;
  }
}
