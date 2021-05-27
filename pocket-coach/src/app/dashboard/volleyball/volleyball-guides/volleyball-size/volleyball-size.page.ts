import { Component, OnInit } from '@angular/core';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-volleyball-size',
  templateUrl: './volleyball-size.page.html',
  styleUrls: ['./volleyball-size.page.scss'],
})
export class VolleyballSizePage implements OnInit {
  methodList: string[];
  imgList: string[];

  constructor(private sportsEquipService: SportsEquipmentService) {}

  ngOnInit() {
    this.methodList = this.sportsEquipService.sizesMethodsList;
    this.imgList = this.sportsEquipService.brandImgUrlList;
  }
}
