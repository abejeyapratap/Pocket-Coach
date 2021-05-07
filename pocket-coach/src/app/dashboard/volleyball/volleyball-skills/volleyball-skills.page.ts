import { Component, OnInit } from '@angular/core';
import { Skill } from '../../skills.model';
import { VolleyballSkillsService } from '../volleyball-skills.service';

@Component({
  selector: 'app-volleyball-skills',
  templateUrl: './volleyball-skills.page.html',
  styleUrls: ['./volleyball-skills.page.scss'],
})
export class VolleyballSkillsPage implements OnInit {
  fetchedSkillList: Skill[];

  constructor(private volleyballSkillsService: VolleyballSkillsService) { }

  ngOnInit() {
    this.fetchedSkillList = this.volleyballSkillsService.basicSkillsList;
  }

}
