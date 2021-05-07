import { Component, OnInit } from '@angular/core';
import { VolleyballSkillsService } from '../../volleyball-skills.service';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../../skills.model';
import { ModalController, NavController } from '@ionic/angular';
import { VolleyballEvaluationComponent } from './volleyball-evaluation/volleyball-evaluation.component';

@Component({
  selector: 'app-volleyball-details',
  templateUrl: './volleyball-details.page.html',
  styleUrls: ['./volleyball-details.page.scss'],
})
export class VolleyballDetailsPage implements OnInit {
  // Display details for the Skill fetched
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(
    private route: ActivatedRoute,
    private volleyballSkillsService: VolleyballSkillsService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('skillId')) {
        this.navCtrl.navigateBack('/dashboard/volleyball/volleyball-skills');
        return;
      }
      this.currentSkill = this.volleyballSkillsService.getSkill(
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
        component: VolleyballEvaluationComponent,
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
