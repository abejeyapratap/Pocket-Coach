import { Component, OnInit } from '@angular/core';
import { SoccerSkillsService } from '../../soccer-skills.service';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../../skills.model';
import { ModalController, NavController } from '@ionic/angular';
import { SoccerEvaluationComponent } from './soccer-evaluation/soccer-evaluation.component';

@Component({
  selector: 'app-soccer-details',
  templateUrl: './soccer-details.page.html',
  styleUrls: ['./soccer-details.page.scss'],
})
export class SoccerDetailsPage implements OnInit {
  // Display details for the Skill fetched
  currentSkill: Skill;
  currentSegment = 'eval';

  constructor(
    private route: ActivatedRoute,
    private soccerSkillsService: SoccerSkillsService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
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

  onToggleCheck() {

  }

  onOpenEvaluationModal() {
    this.modalCtrl
      .create({
        component: SoccerEvaluationComponent,
        componentProps: {
          skillName: this.currentSkill.skillName,
          selfEvalList: this.currentSkill.skillDetailsObj.skillEval,
          // toggleList: this.currentSkill.skillDetailsObj.toggleState
          // currentSkill: this.currentSkill
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
