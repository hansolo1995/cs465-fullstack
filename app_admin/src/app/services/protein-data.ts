/**
 * Author:      Hansol Lee
 * Description: Protein-Data angular service responsible for configuring the appropriate data paths 
 *              to and from different components
 */

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Protein } from '../models/protein';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})

export class ProteinData {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/proteins';

  // List of CRUD operations linked to their appropriate API endpoints
  /* Returning an 'Observable' object allows the component to attach to the object and receive notice when 
  *  he asynchronous call is completed and the promise is fulfilled
  */
  getProteins() : Observable<Protein[]> {
    return this.http.get<Protein[]>(this.url);
  }

  addProtein(formData: Protein) : Observable<Protein> {
    return this.http.post<Protein>(this.url, formData);
  }

  getProtein(Gene: string) : Observable<Protein[]> {
    return this.http.get<Protein[]>(this.url + '/' + Gene);
  }

  updateProtein(formData: Protein) : Observable<Protein> {
    return this.http.put<Protein>(this.url + '/' + formData.Gene, formData);
  }

  deleteProtein(Gene: string) : Observable<Protein> {
    return this.http.delete<Protein>(this.url + '/' + Gene);
  }

  // Call to our /login endpoint - returns JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    console.log('Inside ProteinDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint - creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    console.log('Inside ProteinDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    console.log('Inside ProteinDataService::handleAuthAPICall')
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }
}
