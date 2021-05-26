import { Injectable } from '@angular/core';
import equipmentData from '../../assets/data/equipment.json';

@Injectable({
  providedIn: 'root',
})
export class SportsEquipmentService {
  private _soccerEquip = equipmentData[0].soccer;

  constructor() {}

  get soccerEquip() {
    return [...this._soccerEquip];
  }

  // find the equipment with particular ID and return that equipment's details
  getSoccerEquipItem(id: string) {
    return { ...this._soccerEquip.find((equipObj) => equipObj.equipId === id) };
  }
}
