/**
 * File name: tennis-equipment.page.ts
 * Purpose: Sports Equipment Cards
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-tennis-equipment',
  templateUrl: './tennis-equipment.page.html',
  styleUrls: ['./tennis-equipment.page.scss'],
})
export class TennisEquipmentPage implements OnInit {
  fetchedEquipList: {
    equipId: string;
    equipName: string;
    equipDescription: string;
    equipImgUrl: string;
    equipDetails: string[];
    equipDetailImgUrl: string;
  }[];

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.fetchedEquipList = this.sportsEquipService.tennisEquip;
  }
}
