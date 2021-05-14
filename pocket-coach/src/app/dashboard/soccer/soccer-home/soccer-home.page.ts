/**
 * File name: soccer-home.page.ts
 * Purpose: Home page with Description Toggle
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soccer-home',
  templateUrl: './soccer-home.page.html',
  styleUrls: ['./soccer-home.page.scss'],
})
export class SoccerHomePage implements OnInit {
  isVisible = false;

  constructor() {}

  toggleDescription() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {}
}
