import { Component, OnInit } from '@angular/core';
import { Skill } from '../../skills.model';
import { SoccerSkillsService } from '../soccer-skills.service';

@Component({
  selector: 'app-soccer-skills',
  templateUrl: './soccer-skills.page.html',
  styleUrls: ['./soccer-skills.page.scss'],
})
export class SoccerSkillsPage implements OnInit {
  fetchedSkillList: Skill[];

  constructor(private soccerSkillsService: SoccerSkillsService) {}

  ngOnInit() {
    this.fetchedSkillList = this.soccerSkillsService.basicSkillsList;
  }
}
