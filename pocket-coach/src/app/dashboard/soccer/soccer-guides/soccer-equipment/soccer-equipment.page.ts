import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-soccer-equipment',
  templateUrl: './soccer-equipment.page.html',
  styleUrls: ['./soccer-equipment.page.scss'],
})
export class SoccerEquipmentPage implements OnInit {
  fetchedEquipList: {
    equipId: string;
    equipName: string;
    equipDescription: string;
    equipImgUrl: string;
    equipDetails: string[];
    equipDetailImgUrl: string;
  }[];

  testItem;

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.fetchedEquipList = this.sportsEquipService.soccerEquip;
  }
}
