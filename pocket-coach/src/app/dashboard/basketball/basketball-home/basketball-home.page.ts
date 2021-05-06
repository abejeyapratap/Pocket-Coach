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
