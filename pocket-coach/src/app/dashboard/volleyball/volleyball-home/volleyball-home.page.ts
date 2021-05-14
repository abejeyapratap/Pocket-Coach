/**
 * File name: volleyball-home.page.ts
 * Purpose: Home page with Description Toggle
 * Date: 5/4/21
 * Author(s): Abe Jeyapratap
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volleyball-home',
  templateUrl: './volleyball-home.page.html',
  styleUrls: ['./volleyball-home.page.scss'],
})
export class VolleyballHomePage implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit() {}

  toggleDescription() {
    this.isVisible = !this.isVisible;
  }
}
