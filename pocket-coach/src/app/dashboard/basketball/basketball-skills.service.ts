import { Injectable } from '@angular/core';
import { Skill, SkillDetails } from '../skills.model';

@Injectable({
  providedIn: 'root',
})
export class BasketballSkillsService {
  // Skills data for Sports
  private _basicSkillList: Skill[] = [
    new Skill(
      'Dribbling',
      's1',
      'Bouncing the basketball on the floor continuously with one hand at a time. It is the only legal way a player is allowed to run or walk with the ball.',
      '/assets/img/basketball_dribbling.jpg',
      new SkillDetails(
        [
          'Get in a low stance. This allows for less travel between your hands and the ground. Making it harder for the defender to steal the ball.',
          'Using your fingertips and not your palm, bounce the ball on the ground. Using your fingertips allows for more control and uses less arm strength.',
          'Keep your hands on top of the ball. You should have full control of the ball at all times. Make sure your palm is always directly above the ball .',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Keep your head up. Try not to look at the ball when dribbling. It allows you to look for open teammates and also keep an eye on the defender.',
          "Don’t stop dribbling until you know that you’re going to shoot it or pass it. If you stop dribbling, you are no longer allowed to dribble again.",
          'Try to keep the ball low. The lower the ball, the harder it is for the defender to steal the ball.',
        ],
        [
          'Dribble the ball 15 times without losing control of the ball with each hand (30 times total).',
          'Dribble the ball 15 times without looking at the ball with each hand (30 times total).',
          'Dribble the ball while walking around the court for 25 seconds (no looking at the ball and remain full control).',
          'Dribble the ball while running around the court 15 seconds (no looking at the ball and remain full control).',
        ]
      ),
      0
    ),
    new Skill(
      'Shooting',
      's2',
      'One of the most important skills in basketball. Shooting allows you to score anywhere on the court.',
      '/assets/img/basketball_shooting.png',
      new SkillDetails(
        [
          'Keep your feet no further than shoulder width apart. This allows for good balance.',
          'Locate the rim as early as possible and focus on it and not the ball. This allows for better accuracy.',
          'Flex your knees slightly. Helps keep balance and also puts you in position to jump as soon as you have the ball.',
          'As you go up for the jump shot, push the ball with your shooting hand while your guide hand is on the side of the ball. The guide hand should not add force to the ball',
          'In one motion, jump while releasing the ball at the peak of the jump',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Hold your follow through. This is when you release the ball, you continue to extend the arm and keep the wrist motion. When the shot is complete, your hands should resemble the shape of a swan.',
          "Position your elbow so that it’s inline with your shoulder. This will help with the accuracy of the shot.",
          'When you catch the ball, dip the ball down to your waist. In one motion go up for the shot. This gives you more power and momentum for longer shots.',
        ],
        [
          'Make 3 shots in a row from 4-6 feet away from the basket.',
          'Make 6 out of 10 free throws (15 feet from the basket).',
          'Make 2 out of 4 three pointers (around 22 feet from the basket).',
        ]
      ),
      0
    ),
    new Skill(
      'Passing',
      's3',
      'One of the most basic moves in basketball. Can be used to get the ball around a defender.',
      '/assets/img/basketballpass2.jpg',
      new SkillDetails(
        ['In a chest pass, hold the sides of the ball with both hands and keep your elbows tight nest to your torso.', 'Step out with one foot towards your target and simultaneously press your arms out.',
        'The pass should go straight out and arrive at a teammates chest level','In a bounce pass, the ball originates from the same area as the chest pass','Your aim should be towards the ground three fourth of the way between you and your teammate',
        'Pass the ball hard enough to where your teammate receives the ball at waist level'],
        ['image.png'],
        ['Always look for open teammates on the court to pass it to', 'You could try to fake a pass to trick the defender', 'Try to predict where the defender is going and pass accordingly'],
        ['Do 20 successful chest passes in a row (pass it to a wall or another person)','Do 20 successful bounce passes in a row (pass it to a wall or another person']
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
