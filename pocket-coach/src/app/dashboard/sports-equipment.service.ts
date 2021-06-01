/**
 * File name: sports-equipment.service.ts
 * Purpose: Fetch & Provide JSON data for the Guides pages for ALL Sports
 * Date: 5/26/21
 * Author(s): Abe Jeyapratap
 */
import { Injectable } from '@angular/core';
import equipmentData from '../../assets/data/equipment.json';

@Injectable({
  providedIn: 'root',
})
export class SportsEquipmentService {
  private _soccerEquip = equipmentData[0].soccer;
  private _basketballEquip = equipmentData[1].basketball;
  private _tennisEquip = equipmentData[2].tennis;
  private _volleyballEquip = equipmentData[3].volleyball;

  private _sizesMethodsList = [
    'Place a piece of paper against the wall',
    'Place foot on paper (works best on hard flooring)',
    'Using a pencil, trace the outline of your foot (may be easier with someone else’s help)',
    'Use a ruler to measure the longest part of the outline',
    "Refer to the size chart below (scroll to see men's, women's, or kid's)",
  ];
  // data for the size charts
  private _brandImgUrlList: string[] = [
    'https://i.pinimg.com/280x280_RS/55/49/1f/55491f50d083879b4660fe91b0507dcc.jpg',
    '/assets/img/',
    '',
    '',
  ];

  /* Getters */
  get sizesMethodsList() {
    return this._sizesMethodsList;
  }

  get brandImgUrlList() {
    return this._brandImgUrlList;
  }

  get soccerEquip() {
    return [...this._soccerEquip];
  }

  get basketballEquip() {
    return [...this._basketballEquip];
  }

  get tennisEquip() {
    return [...this._tennisEquip];
  }

  get volleyballEquip() {
    return [...this._volleyballEquip];
  }

  // find the equipment with particular ID and return that equipment's details
  getSoccerEquipItem(id: string) {
    return { ...this._soccerEquip.find((equipObj) => equipObj.equipId === id) };
  }

  getBasketballEquipItem(id: string) {
    return {
      ...this._basketballEquip.find((equipObj) => equipObj.equipId === id),
    };
  }

  getTennisEquipItem(id: string) {
    return { ...this._tennisEquip.find((equipObj) => equipObj.equipId === id) };
  }

  getVolleyballEquipItem(id: string) {
    return {
      ...this._volleyballEquip.find((equipObj) => equipObj.equipId === id),
    };
  }

  constructor() {}
}
