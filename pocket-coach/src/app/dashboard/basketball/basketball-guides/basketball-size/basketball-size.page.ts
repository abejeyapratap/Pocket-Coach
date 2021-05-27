import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-basketball-size',
  templateUrl: './basketball-size.page.html',
  styleUrls: ['./basketball-size.page.scss'],
})
export class BasketballSizePage implements OnInit {
  methodList: string[];
  imgList: string[];

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.methodList = this.sportsEquipService.sizesMethodsList;
    this.imgList = this.sportsEquipService.brandImgUrlList;
  }
}
