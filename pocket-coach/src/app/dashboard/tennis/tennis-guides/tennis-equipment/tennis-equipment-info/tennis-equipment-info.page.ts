import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SportsEquipmentService } from 'src/app/dashboard/sports-equipment.service';

@Component({
  selector: 'app-tennis-equipment-info',
  templateUrl: './tennis-equipment-info.page.html',
  styleUrls: ['./tennis-equipment-info.page.scss'],
})
export class TennisEquipmentInfoPage implements OnInit {
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
        this.navCtrl.navigateBack('/dashboard/tennis/tennis-guides');
      }

      let id = paramMap.get('equipId');
      this.currentEquip = this.sportsEquipService.getTennisEquipItem(id);
    });
  }
}
