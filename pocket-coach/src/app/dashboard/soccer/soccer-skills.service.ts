import { Injectable } from '@angular/core';
import { Skill, SkillDetails } from '../skills.model';

@Injectable({
  providedIn: 'root',
})
export class SoccerSkillsService {
  // Skills data for Sports
  private _basicSkillList: Skill[] = [
    new Skill(
      'Dribbling',
      's1',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      new SkillDetails(
        ['instruction 1', 'instruction 2'],
        ['image.png'],
        ['Tip 1', 'Tip 2']
      )
    ),
    new Skill(
      'Passing',
      's2',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      new SkillDetails(
        ['instruction 1', 'instruction 2'],
        ['image.png'],
        ['Tip 1', 'Tip 2']
      )
    ),
    new Skill(
      'Shooting',
      's3',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      new SkillDetails(
        ['instruction 1', 'instruction 2'],
        ['image.png'],
        ['Tip 1', 'Tip 2']
      )
    ),
  ];

  constructor() {}

  get basicSkillsList() {
    // return a copy; not OG
    return [...this._basicSkillList];
  }

  // find the Skill in list to render & return a clone
  getSkill(id: string) {
    return {...this._basicSkillList.find((skillObj) => skillObj.skillId === id)};
  }
}
