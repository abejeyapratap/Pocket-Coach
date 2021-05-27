import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-tennis-size',
  templateUrl: './tennis-size.page.html',
  styleUrls: ['./tennis-size.page.scss'],
})
export class TennisSizePage implements OnInit {
  methodList: string[];
  imgList: string[];

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.methodList = this.sportsEquipService.sizesMethodsList;
    this.imgList = this.sportsEquipService.brandImgUrlList;
  }
}
