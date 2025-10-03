import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar implements OnInit {
  constructor(
    private authenticationService: Authentication
  ) { }

  ngOnInit() { }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    return this.authenticationService.logout();
  }
  
}
