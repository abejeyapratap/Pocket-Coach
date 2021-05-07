import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Skill } from 'src/app/dashboard/skills.model';

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
  @Input() toggleList: boolean[];
/*   @Input() currentSkill: Skill;
  mergedArr: {eval: string, toggle: boolean}[]; */

  checked = false;
  counter = -4;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCloseModal() {
    this.modalCtrl.dismiss();
  }

  /*
  checkOff() {
    let count = [+!!this.checked];
    return count;
  }

  checkOff2() {
    if (this.checked == true) {
      counter = counter + 0.25;
      console.log(counter);
      return 1;
    } else {
      counter = counter - 0.25;
      console.log(counter);
      return 0;
    }
  }*/

  /* mergeArray() {
    for (let i = 0; i < this.currentSkill.skillDetailsObj.skillEval.length; i++) {
      // this.mergedArr.push({this.currentSkill.skillDetailsObj.skillEval[i], this.currentSkill.skillDetailsObj.toggleList[i]})
      let eval = this.currentSkill.skillDetailsObj.skillEval[i];
      let toggle = this.currentSkill.skillDetailsObj.toggleList[i];
      this.mergedArr.push({eval, toggle})
    }
  } */
}
