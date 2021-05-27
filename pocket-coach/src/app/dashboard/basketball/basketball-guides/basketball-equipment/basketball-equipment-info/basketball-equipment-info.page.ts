import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-basketball-equipment-info',
  templateUrl: './basketball-equipment-info.page.html',
  styleUrls: ['./basketball-equipment-info.page.scss'],
})
export class BasketballEquipmentInfoPage implements OnInit {
  currentEquip: {
    equipId: string;
    equipName: string;
    equipDescription: string;
    equipImgUrl: string;
    equipDetails: string[];
    equipDetailImgUrl: string;
  };

  constructor(
    private route: ActivatedRoute,
    private sportsEquipService: SportsEquipmentService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('equipId')) {
        this.navCtrl.navigateBack('/dashboard/basketball/basketball-guides');
      }

      let id = paramMap.get('equipId');
      this.currentEquip = this.sportsEquipService.getBasketballEquipItem(id);
    });
  }
}
