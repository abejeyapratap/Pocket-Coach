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
