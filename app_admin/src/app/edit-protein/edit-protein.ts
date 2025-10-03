/**
 * Author:      Hansol Lee
 * Description: Edit-Protein angular component that handles operations associated with the Edit-Protein form
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProteinData } from '../services/protein-data';
import { Protein } from '../models/protein';

@Component({
  selector: 'app-edit-protein',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-protein.html',
  styleUrl: './edit-protein.css'
})

export class EditProtein implements OnInit {
  public editForm!: FormGroup;
  protein!: Protein;
  submitted = false;
  message : string = '';

  // Set up the form builder, router, and access to protein data service
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private proteinService: ProteinData
  ) { }

  ngOnInit(): void {  
    let Gene = localStorage.getItem('Gene');

    // Check database for the user-specified Gene label and notify user if no match is found
    // Otherwise continue with initializing the form's fields
    if (!Gene) 
    {
      alert('Error occurred - Could not find where I stashed Gene label!');
      this.router.navigate(['']);
      return;
    }

    console.log('EditProtein::ngOnInit');
    console.log('Gene:' + Gene);

    this.editForm = this.formBuilder.group({
      Gene: ['', Validators.required],
      Ensembl: ['', Validators.required],
      Chromosome: ['', Validators.required],
      Position: ['', Validators.required],
      Description: ['', Validators.required],
      Image: ['', Validators.required]
    })

    // Populate the form's fields with the data retrieved from the user-specified Gene label
    this.proteinService.getProtein(Gene)
      .subscribe({
        next: (value: any) => {
          this.protein = value[0];
          this.editForm.patchValue(value[0]);
          if (!value)
          {
            this.message = 'No Protein Retrieved!';
          }
          else 
          {
            this.message = 'Protein: ' + Gene + ' retrieved.';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  // Ensure all required fields are filled in the edit-protein form prior to saving the edited protein data
  // Continue with updateProtein() if all requirements are met
  public onSubmit() {
    
    this.submitted = true;

    if (this.editForm.valid)
    {
      this.proteinService.updateProtein(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }
  }

  // Get the form short name to access the form fields
  get f() { return this.editForm.controls; }
}