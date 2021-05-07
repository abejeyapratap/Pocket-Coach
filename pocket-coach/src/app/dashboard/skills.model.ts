// Define how each Skill should look like
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
    public toggleList?: boolean[]
  ) {}
}
