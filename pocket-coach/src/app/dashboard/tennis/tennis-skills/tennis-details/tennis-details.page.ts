import { Component, OnInit } from '@angular/core';
import { TennisSkillsService } from '../../tennis-skills.service';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../../skills.model';
import { ModalController, NavController } from '@ionic/angular';
import { TennisEvaluationComponent } from './tennis-evaluation/tennis-evaluation.component';

@Component({
  selector: 'app-tennis-details',
  templateUrl: './tennis-details.page.html',
  styleUrls: ['./tennis-details.page.scss'],
})
export class TennisDetailsPage implements OnInit {
  // Display details for the Skill fetched
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(
    private route: ActivatedRoute,
    private tennisSkillsService: TennisSkillsService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('skillId')) {
        this.navCtrl.navigateBack('/dashboard/tennis/tennis-skills');
        return;
      }
      this.currentSkill = this.tennisSkillsService.getSkill(
        paramMap.get('skillId')
      );
    });
  }

  onSegmentChange(event: any) {
    this.currentSegment = event.detail.value;
  }

  onOpenEvaluationModal() {
    this.modalCtrl
      .create({
        component: TennisEvaluationComponent,
        componentProps: {
          skillName: this.currentSkill.skillName,
          selfEvalList: this.currentSkill.skillDetailsObj.skillEval,
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
