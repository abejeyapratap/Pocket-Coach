/**
 * File name: soccer-skills.service.ts
 * Purpose: Store data about Soccer Skills and provide it in other components
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap, Wyman Li
 */

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
      'Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      '/assets/img/soccer-dribbling.jpg',
      new SkillDetails(
        [
          'Get in position by slightly bending your knees, and having the ball in front of you.',
          'As a beginner, use the inside of your shoes to dribble the ball. This way of dribbling gives you the most control. You want to be in control of the ball at all times.',
          'As you run, slightly tap the ball with your shoe. Try to keep the ball in control and close to you as you move. This makes it harder for defenders to take possession from you.',
          'Once you learn how to control the ball with the inside of your shoes, practice using the outside and the front of your shoes.',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          "Be aware of where the ball is in relation to you, but don't keep your head down the entire time. Looking up allows you to know when to make passes and shots.",
          "Don't kick the ball too hard. You want to always be in control of the ball.",
          'Make sure that your arms are moving too. They help you keep balance as you move around.',
          'Different situations require different dribbling techniques',
        ],
        [
          'Dribble down half the size of a soccer field without losing control of the ball while dribbling at a moderate pace 3 times.',
          'Successfully complete drill 3 times without losing control (Around the square counts as 1). Place 10 soccer cones in a row with space in between them so that you can dribble through them. Use one foot to dribble the ball while using both the inside and outside of your shoe. Switch foot after you’re done.',
          'Successfully complete drill 3 times without losing control (Back and forth counts as 1). Place one cone down, walk 8 foot forward, place another cone down and turn 90 degrees. Continue, until the four cones make a square. Dribble as close as possible to the cones while using the outside of your foot. Switch foot after you’re done.',
          'Do the shuttle run 3 times without losing control. Place 6 cones 5 yards apart in a single line. Start at the first cone, and dribble to the second cone. Once you reach the second cone turn around and run to the first cone. Continue until you have reached the first cone while going through all 6 cones. You should be dribbling the entire time.',
        ],
        [false, false, false, false]
      ),
      0
    ),
    new Skill(
      'Passing',
      's2',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      '/assets/img/soccer-passing.jpg',
      new SkillDetails(
        [
          'The most basic type of pass is the “push pass,” which is used to get the ball directly to your teammate by kicking it across the ground.',
          'Place your plant foot (non-kicking foot) beside the ball with the inside of your foot towards it. The tip of this foot and your torso should be facing towards where you want to pass to.',
          'You want to hit the ball with the inside of your kicking foot because it allows for the best control. As you pull back your kicking foot, rotate your leg so that the inside of your foot faces the ball. The more you pull back, the more power you can put into your pass.',
          'Kick while locking your ankle and following through.',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Keep your eyes on the ball to ensure you can properly perform the pass.',
          'Make sure you kick at the center of the ball. Otherwise, it may go in a direction different from the one you want it to go in.',
          'If you have trouble balancing, try holding your arms out to control yourself.',
        ],
        [
          'Pass the ball 10 times (Can be done with a partner or against a wall.)',
          'Pass the ball 10 times while moving. Intentionally hit the ball to the side so that you must move to receive it. (Can be done with a partner or against a wall. Best done with a partner.)',
          'Pass the ball 10 times in a row while moving without losing control. (Best done with a partner, but can still be done against the wall.)',
          'If you have a group of 3 or more people, form a shape around the ball (triangle with 3 people or square with 4), and kick the ball back and forth 10 times (10 pass per person,)',
        ]
      ),
      0
    ),
    new Skill(
      'Shooting',
      's3',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      '/assets/img/soccer-shooting.jpg',
      new SkillDetails(
        [
          'Take a step or two towards the ball for momentum.',
          'Place your non-kicking foot next to the ball.',
          'Bring your kicking foot back as far as possible. (The further you bring it back the more power you generate.)',
          'Lock your ankles. Your foot should be pointed down, straight and firm.',
          'Stand straight as you kick. You want to have as much control over your body as possible.',
          'Aim for the middle of the ball. (If you want the ball to go higher, aim a bit lower from the middle. If you want the curve the ball, aim for the side of the ball.)',
        ],
        ['image.png'],
        [
          'Keep your head down and eyes on the ball when kicking.',
          'Keep your body over the ball.',
          'Maintain your composure, keep your ankle locked, and stand straight.',
          'Make contact near the middle of the ball.',
          'Different shooting techniques depend on the current situation.',
        ],
        [
          'Kick the ball 10 times into the goal while standing.',
          'Kick the ball 10 times into the goal while dribbling the ball.',
          'Kick the ball 10 times under the middle of the ball to give the ball more height and score.',
          'Curve the ball 10 times and score.',
        ]
      ),
      0
    ),
  ];

  constructor() {}

  // return a copy; not OG
  get basicSkillsList() {
    return [...this._basicSkillList];
  }

  // find the Skill in list to render & return a clone
  getSkill(id: string) {
    return {
      ...this._basicSkillList.find((skillObj) => skillObj.skillId === id),
    };
  }

  // Return the number of Skills to be learned
  countSkills() {
    return this._basicSkillList.length;
  }

  /* countSkillEval(evalNum: number) {
    return this._basicSkillList[evalNum].skillDetailsObj.skillEval.length;
  } */
}
