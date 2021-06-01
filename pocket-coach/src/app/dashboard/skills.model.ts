/**
 * File name: skills.model.ts
 * Purpose: Define how each Skill should look like
 * Date: 5/5/21
 * Author(s): Abe Jeyapratap
 */

export class Skill {
  constructor(
    public skillName: string,
    public skillId: string,
    public description: string,
    public skillImgUrl: string,
    public skillDetailsObj: SkillDetails,
    public progress?: number
  ) {}
}

export class SkillDetails {
  constructor(
    public skillInstructions: string[],
    public imageUrls: string[],
    public skillTips: string[],
    public skillEval: string[],
    public evalObj?: { eval: string; toggle: boolean }[]
  ) {}
}
