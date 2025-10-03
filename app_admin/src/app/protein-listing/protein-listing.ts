/**
 * Author:      Hansol Lee
 * Description: Protein-Listing angular component that will display the list of proteins
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProteinCard } from '../protein-card/protein-card';
import { Protein } from '../models/protein';
import { ProteinData } from '../services/protein-data';
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protein-listing',
  standalone: true,
  imports: [CommonModule, ProteinCard],
  templateUrl: './protein-listing.html',
  styleUrl: './protein-listing.css',
  providers: [ProteinData]
})

export class ProteinListing implements OnInit{
  
  proteins!: Protein[];
  message: string = '';

  // Set up access to protein data, router, and authentication services
  constructor(
    private proteinData: ProteinData,
    private router: Router,
    private authenticationService: Authentication
  ) 
  { }

  // Allow login status checks along with routing to the Add-Protein form if an administrator is logged in
  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  public addProtein(): void {
    this.router.navigate(['add-protein']);
  }

  // Use the protein data service to retrieve the list of proteins
  private getProteins(): void {
    this.proteinData.getProteins()
      .subscribe({
        next: (value: any) => {
          this.proteins = value;
          if (value.length > 0)
          {
            this.message = 'There are ' + value.length + ' proteins available.';
          }
          else 
          {
            this.message = 'There were no proteins retrieved from the database.';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  // Display the list of proteins on page initialization
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getProteins();
  }
}