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
