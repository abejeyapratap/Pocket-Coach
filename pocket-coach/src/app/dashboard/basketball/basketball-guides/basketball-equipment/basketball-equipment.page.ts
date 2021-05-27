import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-basketball-equipment',
  templateUrl: './basketball-equipment.page.html',
  styleUrls: ['./basketball-equipment.page.scss'],
})
export class BasketballEquipmentPage implements OnInit {
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
    this.fetchedEquipList = this.sportsEquipService.basketballEquip;
  }
}
