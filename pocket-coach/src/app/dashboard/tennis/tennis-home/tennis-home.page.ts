/**
 * File name: tennis-home.page.ts
 * Purpose: Home page with Description Toggle
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tennis-home',
  templateUrl: './tennis-home.page.html',
  styleUrls: ['./tennis-home.page.scss'],
})
export class TennisHomePage implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit() {}

  toggleDescription() {
    this.isVisible = !this.isVisible;
  }
}
