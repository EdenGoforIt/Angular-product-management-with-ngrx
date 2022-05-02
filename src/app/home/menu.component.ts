import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      #logo {
        width: 100px;
        height: 70px;
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent implements OnInit {
  pageTitle = 'Eden Logistics';
  logoPath: string = 'assets/images/expressLogo.jpg';
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
