/**
 * File name: volleyball-skills.service.ts
 * Purpose: Store data about Volleyball Skills and provide it in other components
 * Date: 5/6/21
 * Author(s): Abe Jeyapratap, Nicholas Hom
 */

import { Injectable } from '@angular/core';
import { Skill, SkillDetails } from '../skills.model';

@Injectable({
  providedIn: 'root',
})
export class VolleyballSkillsService {
  // Skills data for Sports
  private _basicSkillList: Skill[] = [
    new Skill(
      'Bumping/Receiving',
      's1',
      'This is one of the most basic, yet important skills in volleyball. It is the best way to receive a ball from serving or hitting and begin your team’s offense.',
      '/assets/img/vball-passing.jpg',
      new SkillDetails(
        [
          'Get in a wide stance and lean forward a little. This is so that you are in a position to make quick movements.',
          'Your arms should be able to reach close to the ground. So if the ball comes down low in front of you, you can reach it.',
          'Move into position so the ball will come in front of you. This allows you to be in the best position for receiving.',
          'Extend both your arms and place one hand inside the other, with both thumbs parallel to one another. This creates a flat “platform” for the ball to bounce off of.',
          'When the ball comes towards you, you want it to hit your forearms and NOT YOUR HANDS. Hitting it with your hands will make the ball go in an unpredictable direction.',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Maintain eye contact with the ball the whole time. This is to ensure you don’t miss at the last second.',
          'If the ball is fast, let it bounce off your arms. If the ball is slow and you want to add power, follow through by slightly swinging your arms and raising your knees. Remember, your objective is to give a good pass to a teammate so they can set the ball.',
          'If the ball is to the side of your body, drop your shoulders, and angle your arms to the setter.',
          'To aim the pass left or right, twist your shoulders. This will take time to get used to.',
        ],
        [
          'Bump the ball 10 times. (Can be done with a partner or against a wall.)',
          'Bump the ball 10 times in a row without dropping it. (Can be done with a partner or against a wall.)',
          'Bump the ball 10 times in a row while moving. Intentionally hit the ball to the side so that you must move to receive it. (Can be done with a partner or against a wall.)',
          'Bump the ball 10 times in a row solo. While standing on flat ground, keep bumping the ball up in the air and don’t let it drop. This will help you have better control.',
        ]
      ),
      0
    ),
    new Skill(
      'Setting',
      's2',
      'This is the second step of an offensive play. It often takes the form of using your hands to push the ball into a position that allows a teammate to get a strong hit.',
      '/assets/img/vball-setting.jpg',
      new SkillDetails(
        [
          'Get under the ball and square your feet and shoulders to the person you are setting to. (You want to be under the ball with plenty of time so that you can get your position set up).',
          'Extend your arms up over your head. (Your hands should be directly above your forehead.)',
          'Your hands should be roughly four to six inches above your forehead and your fingers should be spread out like you’re holding a ball. (Your thumbs and pointer finger should form a triangular window you can see through).',
          'Try to make contact with all your fingers touching the ball. (More fingers = more control.)',
          'As soon as the ball makes contact with your fingers, straighten your arms and legs and push the ball upward while facing your target. Follow through.',
        ],
        [
          'https://soccerlifestyle.com/wp-content/uploads/2019/05/How-to-Dribble-a-Soccer-Ball-soccerlifestyle.jpeg',
        ],
        [
          'Your hands should not be touching each other.',
          'Do not let the ball contact your palm. Contacting the ball with your palm is considered as “catching the ball” and is a violation in setting.',
          'Do not bring your arms down to your forehead when you are catching the ball. This action can be considered “carrying” and is also a violation.',
          'You can not hit the ball twice during a set. (Touching the ball with each hand in succession.) This action is considered a “double” is a violation.',
        ],
        [
          'Set the ball 10 times (with a partner or against the wall.)',
          'Set the ball 10 times without dropping it (with a partner or against the wall.)',
          'Set the ball 10 times in a row while moving. Intentionally set the ball to the side so that you must move to set it. (with a partner or against the wall.)',
          'Get in a sitting position and set the ball while only using your arms 10 times without dropping it. This drill will help strengthen your arms and wrists because your legs won’t be used. (with a partner or against the wall)',
        ]
      ),
      0
    ),
    new Skill(
      'Hitting/Spiking',
      's3',
      'This is the final step of an offensive play. This is the most effective way to score a point by slamming the ball over the net into the opponent’s court.',
      '/assets/img/vball-hitting.jpg',
      new SkillDetails(
        [
          'If you’re right handed, your approach should follow: small right leg, small left leg, and quick and big right and left leg.',
          'While doing the approach, your arms should be behind your back to add momentum to your jump.',
          'On your final step, jump as high as you can vertically, bringing both your arms into the air.',
          'Use your non-hitting hand to aim for the ball, and bring your hitting hand back to your ear and elbows facing 90 degrees upwards.',
          'Swing your hitting hand and hit the ball as hard as you can with the palm of your hand.',
          'Follow through with your arm to finish off the hit.',
        ],
        ['image.png'],
        [
          'Make sure you always have eyes on the ball so that you know where it will land.',
          'Hit the ball at your highest reach',
          'Your approach should be one steady motion',
        ],
        [
          'Do the approach 10 times successfully',
          'Stand far away from the wall, and practice hitting 10 times against the wall. Swing the ball so that it bounces off the ground first, and then off the wall and back at you. As the ball is in the air, get in position and swing again.',
          'Do the approach and hit the ball 10 times successfully (Have someone stand on top of a chair while holding the ball out)',
          'Do the approach and hit the ball 10 times successfully and in the court.',
        ]
      ),
      0
    ),
    new Skill(
      'Serving',
      's4',
      'How every volley begins. It is one of the few actions within volleyball that is individual and not reliant on your own team.',
      '/assets/img/vball-serving.jpg',
      new SkillDetails(
        [
          '(Standing Float) Stand with your feet about shoulder-width apart. Place the foot opposite of your hitting hand in front of the other foot.',
          'Place your non-dominant hand directly in front of you and place the ball in your palm.',
          'Swing your serving arm back next to your ear. Your elbow should be facing upwards.',
          'Toss the ball into the air. Lift the ball about 18-36 inches in the air. Don’t toss the ball too high, too low, or too far to the side.',
          'Use your legs for power as you swing with your hitting hand. Hit the ball with the palm of your hand.',
          '(Jump Float) Your stance should be the same as a standing float serve, but now you have to add footwork to it.',
          'Step forward with your dominant foot, and then take three quick steps. On the last step of your foot work, throw the ball upward and slightly forward.',
          'Directly jump after you toss the ball. Your hitting arm should be placed elbow up and by your ear.',
          'Hit the ball with the palm of your hand',
          '(Top-Spin) Begin with your feet shoulder-width apart facing the net. Hold the ball with your dominant arm directly in front of you, palm up, with the ball. You should be at least 5-8 feet behind the the line for your approach.',
          'Toss the ball into the air. Step forward with your dominant foot. As you step forward, throw the ball high into the air and forward with your dominant arm.',
          'Take four steps quickly. Your first two steps should be slow so that your last two steps are much quicker and they should look like they’re happening at the same time. On your last step, jump.',
          'Swing both arms backwards to generate power for the jump. As you jump, swing your hitting arm back behind your back, with your elbows facing up in a 90 degrees angle.',
          'Hit the ball with the palm of your hitting hand.',
        ],
        ['image.png'],
        [
          'Don’t toss the ball too high, too low, or too forward for any of the serves.',
          'Practice your toss to make sure that they are consistent when you are doing the actual serve.',
          'Your hitting arm should first always be in a 90 degrees angle with your elbow facing up and by your ear.',
        ],
        [
          'Serve the ball 10 times while doing the standing float serve approach. (The ball should be slightly over the net, and in the court for the point to count.)',
          'Serve the ball 10 times while doing the jumping float serve. (The ball should be slightly over the net, and in the count for the point to count.)',
          'Serve the ball 10 times while doing the top-spin serve (The ball’s trajectory should be rotating downwards. The ball should land in the court for the point to count.)',
          'Serve the ball 10 times while aiming for a specific area you chose. (Choose any of the serving technique you want to get better at and make sure the ball lands in the general area of the spot you have chose.)',
        ]
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
