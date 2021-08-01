import { markUserName } from './state/user.actions';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../state/app.state';

import { AuthService } from './auth.service';
import { getMarkUserName } from './state/user.reducer';
import * as UserActions from './state/user.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Log In';

  maskUserName$: Observable<boolean>;

  constructor(private store: Store<State>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.maskUserName$ = this.store.select(getMarkUserName);
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(): void {
    this.store.dispatch(UserActions.markUserName());
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    }
  }
}
