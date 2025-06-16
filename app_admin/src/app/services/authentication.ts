import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from '../services/trip-data';

@Injectable({
  providedIn: 'root'
})

export class Authentication {
  // Set up our storage and service access
  constructor(
    @Inject(BROWSER_STORAGE) 
    private storage: Storage,
    private tripData: TripData
  ) { }

  // Variable to handle Authentication Response
  authResp: AuthResponse = new AuthResponse();

  // Get our token from our Storage provider
  // NOTE: Key for token: 'travlr-token'
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');

    // Make sure we return a string even if we do not have a token
    if (!out) {
      return '';
    }
    return out;
  }

  // Save our token to our Storage provider
  // Note: Key for token: 'travlr-token'
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Log out of application and remove the JWT from Storage
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Boolean to determine if we are logged in and token is still valid
  // Must reauthenticate if the token has expired
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    }
    else {
      return false;
    }
  }

  // Retrieve the current user
  // Only call this method after checking if user is still logged in
  public getCurrentUser(): User {
    const token: string = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Login method that leverages the login method in tripData within 'app_admin/src/app/services'
  // This method returns an observable with which we can subscribe to and only process when the Observable condition is satisfied
  public login(user: User, passwd: string): void {
    this.tripData.login(user, passwd)
      .subscribe({
        next: (value: any) => {
          if (value) {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }

  // Register method that leverages the register method in tripData within 'app_admin/src/app/services'
  // This method returns an observable with which we can subscribe to and only process when the Observable condition is satisfied
  public register(user: User, passwd: string): void {
    this.tripData.register(user, passwd)
      .subscribe({
        next: (value: any) => {
          if (value) {
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
}

