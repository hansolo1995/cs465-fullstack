/**
 * Author:      Hansol Lee
 * Description: Delete-Protein angular component that handles the deleteProtein() operation
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { ProteinData } from '../services/protein-data';

@Component({
  selector: 'app-delete-protein',
  imports: [CommonModule],
  templateUrl: './delete-protein.html',
  styleUrl: './delete-protein.css'
})

export class DeleteProtein implements OnInit {

  // Set up router and protein data service
  constructor(
    private router: Router,
    private proteinService: ProteinData
  ) { }

  ngOnInit(): void {
    let Gene = localStorage.getItem('Gene');

    // Check database for the user-specified Gene label and notify user if no match is found
    // Otherwise continue with the deleteProtein() method
    if (!Gene) 
    {
      alert('Error occurred - Could not find where I stashed the Gene label!');
      this.router.navigate(['']);
      return;
    }

    this.proteinService.deleteProtein(Gene)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        }
      });

  }

}
