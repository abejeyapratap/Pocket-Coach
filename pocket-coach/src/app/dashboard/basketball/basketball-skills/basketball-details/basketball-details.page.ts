import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../../skills.model';
import { ModalController, NavController } from '@ionic/angular';
import { BasketballSkillsService } from '../../basketball-skills.service';
import { BasketballEvaluationComponent } from './basketball-evaluation/basketball-evaluation.component';

@Component({
  selector: 'app-basketball-details',
  templateUrl: './basketball-details.page.html',
  styleUrls: ['./basketball-details.page.scss'],
})
export class BasketballDetailsPage implements OnInit {
  // Display details for the Skill fetched
  currentSkill: Skill;
  currentSegment = 'learn';

  constructor(
    private route: ActivatedRoute,
    private basketballSkillsService: BasketballSkillsService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('skillId')) {
        this.navCtrl.navigateBack('/dashboard/basketball/basketball-skills');
        return;
      }
      this.currentSkill = this.basketballSkillsService.getSkill(
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
        component: BasketballEvaluationComponent,
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
