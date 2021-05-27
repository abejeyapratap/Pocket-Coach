import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-soccer-size',
  templateUrl: './soccer-size.page.html',
  styleUrls: ['./soccer-size.page.scss'],
})
export class SoccerSizePage implements OnInit {
  methodList: string[];
  imgList: string[];

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.methodList = this.sportsEquipService.sizesMethodsList;
    this.imgList = this.sportsEquipService.brandImgUrlList;
  }
}
