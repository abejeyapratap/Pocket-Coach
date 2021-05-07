import { Injectable } from '@angular/core';
import { Skill, SkillDetails } from '../skills.model';

@Injectable({
  providedIn: 'root',
})
export class VolleyballSkillsService {
  // Skills data for Sports
  private _basicSkillList: Skill[] = [
    new Skill(
      'Dribbling',
      's1',
      'Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/4+Drills/Slide-1$!2c2.jpg',
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
          'While you should be aware of where the ball is in relation to you, you shouldn’t keep your head down the entire time. Looking up allows you to know when to make passes and shots.',
          "Don't kick the ball too hard. You want to always be in control of the ball.",
          'Make sure that your arms are moving too. They help you keep balance as you move around.',
          'Different situations require different dribbling techniques',
        ],
        [
          'Dribble down half the size of a soccer field without losing control of the ball while dribbling at a moderate pace 3 times.',
          'Successfully complete drill 3 times without losing control (Around the square counts as 1). Place 10 soccer cones in a row with space in between them so that you can dribble through them. Use one foot to dribble the ball while using both the inside and outside of your shoe. Switch foot after you’re done.',
          'Successfully complete drill 3 times without losing control (Back and forth counts as 1). Place one cone down, walk 8 foot forward, place another cone down and turn 90 degrees. Continue, until the four cones make a square. Dribble as close as possible to the cones while using the outside of your foot. Switch foot after you’re done.',
          'Do the shuttle run 3 times without losing control. Place 6 cones 5 yards apart in a single line. Start at the first cone, and dribble to the second cone. Once you reach the second cone turn around and run to the first cone. Continue until you have reached the first cone while going through all 6 cones. You should be dribbling the entire time.',
        ]
      )
    ),
    new Skill(
      'Passing',
      's2',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/4+Drills/Slide-1$!2c2.jpg',
      new SkillDetails(
        ['instruction 1', 'instruction 2'],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        ['Tip 1', 'Tip 2'],
        ['']
      )
    ),
    new Skill(
      'Shooting',
      's3',
      'The most basic skill of soccer. Dribbling is the ability to carry the ball past an opponent while being in control and faking the opponent out.',
      'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/4+Drills/Slide-1$!2c2.jpg',
      new SkillDetails(
        ['instruction 1', 'instruction 2'],
        ['image.png'],
        ['Tip 1', 'Tip 2'],
        ['']
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
    return {
      ...this._basicSkillList.find((skillObj) => skillObj.skillId === id),
    };
  }

  // Return the number of Skills to be learned
  countSkills() {
    return this._basicSkillList.length;
  }
}
