/**
 * File name: basketball-home.page.ts
 * Purpose: Home page with Description Toggle
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basketball-home',
  templateUrl: './basketball-home.page.html',
  styleUrls: ['./basketball-home.page.scss'],
})
export class BasketballHomePage implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit() {}

  toggleDescription() {
    this.isVisible = !this.isVisible;
  }
}
