import { Component, OnInit } from '@angular/core';
import { Skill } from '../../skills.model';
import { BasketballSkillsService } from '../basketball-skills.service';

@Component({
  selector: 'app-basketball-skills',
  templateUrl: './basketball-skills.page.html',
  styleUrls: ['./basketball-skills.page.scss'],
})
export class BasketballSkillsPage implements OnInit {
  fetchedSkillList: Skill[];

  constructor(private basketballSkillsService: BasketballSkillsService) {}

  ngOnInit() {
    this.fetchedSkillList = this.basketballSkillsService.basicSkillsList;
  }
}
