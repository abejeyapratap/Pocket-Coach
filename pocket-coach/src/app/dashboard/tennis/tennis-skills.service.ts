/**
 * File name: tennis-skills.service.ts
 * Purpose: Store data about Tennis Skills and provide it in other components
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap (aj928), Wyman Li, Brian Su
 */

import { Injectable } from '@angular/core';
import { Skill, SkillDetails } from '../skills.model';

@Injectable({
  providedIn: 'root',
})
export class TennisSkillsService {
  // Skills data for Sports
  private _basicSkillList: Skill[] = [
    new Skill(
      'Serving',
      's1',
      'The shot to start a point. A player hits the ball with a racquet so that it will fall into the service box that is diagonally opposite to them',
      '/assets/img/tennis_serve.jpg',
      new SkillDetails(
        [
          'Get in a good stance. You should be sideways to the net. Front foot should point in the direction of the net. Back foot should align with the front foot’s heel. The racquet should be at hip height .',
          'Get a good grip. You should grip the racquet like you are shaking hands with it at the bottom.',
          'From the starting stance, move the hand with the ball up and toss the ball once the hand reaches the top of the head.',
          'As the ball rises, get in position to hit the ball and when the body is at full extension, hit the ball as it reaches the optimal height.',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Keep a follow through. This allows for more power in the serve',
          'Jumping while serving. This also allows for more power in the serve',
        ],
        [
          'Serve correctly 8 times in a row (ball lands in the service box).',
          'Place 3 cones in the service box; one in the middle, one on the right edge, and one on the left edge. Hit each cone once within 15 serves.',

        ]
      ),
      0
    ),
    new Skill(
      'Forehand',
      's2',
      'Technique that allows you to hit with effortless power while also maintaining high consistency in your shot.',
      '/assets/img/tennis_forehand.jpg',
      new SkillDetails(
        ['Predict where the ball will be going by looking at the movement of the opponent.', 'Get a grip of the racquet with your dominant hand. The wrist should be loose. Non dominant hand should be resting on the racket.',
         'Keep your legs shoulder width apart and comfortably bent','As the ball comes, pull your shoulder back and swing forward, hitting the ball back to the other side','Keep your eye on the ball until after you make contact with the ball'
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        ['Follow through, continue your arm extension after hitting the ball', 'Remain focused and keep your eye on the ball, this helps with accuracy when hitting the ball'],
        ['With a partner, tell them to throw the ball towards your dominant hand. Return the ball using a backhand 5 times in a row successfully']
      ),
      0
    ),
    new Skill(
      'Backhand',
      's3',
      'Technique that allows you to hit the ball on your weak side. For example, if you’re right handed and the ball comes to your left side, you would use a backhand .',
      '/assets/img/backhand1.jpeg',
      new SkillDetails(
        ['Predict where the ball will be going by looking at the movement of the opponent.', 'Get a grip of the racquet with both your dominant hand and non dominant hand. Both wrists should be loose. Non dominant hand above dominant hand.',
          'Keep your legs shoulder width apart and comfortably bent', 'As the ball comes, keep your legs steady, twist you core, and release the core to hit the ball back to the other side',
          'Keep your eye on the ball until after you make contact with the ball',
        ],
        ['image.png'],
        ['Follow through, continue your arm extension after hitting the ball', 'Remain focused and keep your eye on the ball, this helps with accuracy when hitting the ball'],
        ['With a partner, tell them to throw the ball towards your non dominant hand. Return the ball using a backhand 5 times in a row successfully']
      ),
      0
    ),
  ];

  constructor() {}

  get basicSkillsList() {
    // return a copy; not OG
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
}
