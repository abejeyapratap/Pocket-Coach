import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

let counter = 0;

@Component({
  selector: 'app-soccer-evaluation',
  templateUrl: './soccer-evaluation.component.html',
  styleUrls: ['./soccer-evaluation.component.scss'],
})
export class SoccerEvaluationComponent implements OnInit {
  // receive the name of the Skill opened & the list to render
  @Input() skillName: string;
  @Input() selfEvalList: string[];
  checked = false;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCloseModal() {
    this.modalCtrl.dismiss();
  }

  checkOff() {
    let count = [+!!this.checked];
    return count;
  }

  getCount() {}
}
