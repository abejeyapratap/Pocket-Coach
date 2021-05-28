import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import { AuthLoginService } from './auth-login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  // toggle = false;

  constructor(
    // private authLoginService: AuthLoginService,
    // private navCtrl: NavController
  ) {}

  ngOnInit() {}

/*   onLogin() {
    this.authLoginService.login();
    this.router.navigateByUrl('/dashboard');
  } */

/*   onTransition() {
    this.toggle = !this.toggle;
    this.navCtrl.navigateForward('/dashboard')
  } */
}
