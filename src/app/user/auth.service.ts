import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: User | null;
    redirectUrl: string;

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): Observable<User> {
        // Code here would log into a back end service
        // and return user information
        // This is just hard-coded here.
        this.currentUser = {
            id: 2,
            userName,
            isAdmin: false
        };
        return of(this.currentUser);
    }

    logout(): Observable<void> {
        this.currentUser = null;
        return of();
    }
}
