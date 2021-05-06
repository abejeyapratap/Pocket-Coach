// Define a Sport Model
export class Sport {
  constructor(
    public name: string,
    public description: string,
    public backgroundImg: string[],
    public basicRules: string[],
    public basicRulesImg: string[],
    public advancedRules: string[],
    public advancedRulesImg: string[],
    public servingRules?: string[],
    public servingRulesImg?: string[]
  ) {}
}
