import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-volleyball-evaluation',
  templateUrl: './volleyball-evaluation.component.html',
  styleUrls: ['./volleyball-evaluation.component.scss'],
})
export class VolleyballEvaluationComponent implements OnInit {
  // receive the name of the Skill opened & the list to render
  @Input() skillName: string;
  @Input() selfEvalList: string[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCloseModal() {
    this.modalCtrl.dismiss();
  }
}
