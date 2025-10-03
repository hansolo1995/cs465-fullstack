/**
 * Author:      Hansol Lee
 * Description: Protein-Card angular component that handles rendering Protein object data
 */

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Protein } from '../models/protein';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-protein-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protein-card.html',
  styleUrl: './protein-card.css'
})

export class ProteinCard implements OnInit {

  // Input directive allows protein-listing component to pass protein data for rendering one instance of a protein
  @Input('protein') protein: any;

  // Set up router and authentication service access
  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}
  
  ngOnInit(): void {
    
  }

  // Allow login status checks along with administrative methods associated with each instance of a protein
  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public editProtein(protein: Protein) {
    localStorage.removeItem('Gene');
    localStorage.setItem('Gene', protein.Gene);
    this.router.navigate(['edit-protein']);
  }
  
  public deleteProtein(protein: Protein) {
    localStorage.removeItem('Gene');
    localStorage.setItem('Gene', protein.Gene);
    this.router.navigate(['delete-protein']);
  }
}
