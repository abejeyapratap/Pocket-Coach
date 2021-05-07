import { Component, OnInit } from '@angular/core';
import { TennisSkillsService } from '../tennis-skills.service';
import { Skill } from '../../skills.model';

@Component({
  selector: 'app-tennis-skills',
  templateUrl: './tennis-skills.page.html',
  styleUrls: ['./tennis-skills.page.scss'],
})
export class TennisSkillsPage implements OnInit {
  fetchedSkillList: Skill[];

  constructor(private tennisSkillsService: TennisSkillsService) {}

  ngOnInit() {
    this.fetchedSkillList = this.tennisSkillsService.basicSkillsList;
  }
}
