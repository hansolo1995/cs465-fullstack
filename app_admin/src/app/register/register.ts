/**
 * Author:      Hansol Lee
 * Description: Registration Service that handles operations associated with new user registration
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {
  public formError: string='';
  submitted = false;

  // Initialize credential variables with empty strings
  credentials = {
    name: '',
    email: '',
    password: ''
  }
  
  // Set up router and authentication service access
  constructor (
    private router: Router,
    private authenticationService: Authentication 
  ) { }

  ngOnInit(): void {

  }

  // Ensure all required fields are filled in the registration form prior to registering
  // Continue with registration if all requirements are met
  public onRegistrationSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {

      // Return to registration page if form errors are encountered
      this.formError = "All fields are required, please try again!";
      this.router.navigateByUrl("/register");
    }
    else {
      this.doRegister();
    }
  }

  // Register user with name, email, and password
  // Login using these credentials and route to the administrative home page if successful
  private doRegister(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    // console.log("RegisterComponent::doRegister");
    // console.log(this.credentials);

    this.authenticationService.register(newUser, this.credentials.password);

    this.authenticationService.login(newUser, this.credentials.password);

    if (this.authenticationService.isLoggedIn()) {
      // console.log('Router::Direct');
      this.router.navigate(['']);
    }
    else {
      var timer = setTimeout(() => {
        if (this.authenticationService.isLoggedIn()) {
          // console.log('Router::Pause');
          this.router.navigate(['']);
        }
      },
    2000);
    }
  }

}
