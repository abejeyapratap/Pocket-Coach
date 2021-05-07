import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-basketball-evaluation',
  templateUrl: './basketball-evaluation.component.html',
  styleUrls: ['./basketball-evaluation.component.scss'],
})
export class BasketballEvaluationComponent implements OnInit {
  // receive the name of the Skill opened & the list to render
  @Input() skillName: string;
  @Input() selfEvalList: string[];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCloseModal() {
    this.modalCtrl.dismiss();
  }
}
