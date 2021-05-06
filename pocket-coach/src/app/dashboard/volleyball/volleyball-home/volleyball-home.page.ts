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
