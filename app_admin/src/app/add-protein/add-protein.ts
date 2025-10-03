/**
 * Author:      Hansol Lee
 * Description: Add-Protein angular component that handles operations associated with the Add-Protein form
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProteinData } from '../services/protein-data';

@Component({
  selector: 'app-add-protein',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-protein.html',
  styleUrl: './add-protein.css'
})

export class AddProtein implements OnInit {
  public addForm!: FormGroup;
  submitted = false;

  // Set up the form builder, router, and access to protein data service
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private proteinService: ProteinData
  ) { }

  // Initialize fields in the form with validators to ensure required fields are valid before submission
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      Gene: ['', Validators.required],
      Ensembl: ['', Validators.required],
      Chromosome: ['', Validators.required],
      Position: ['', Validators.required],
      Description: ['', Validators.required],
      Image: ['', Validators.required]
    })
  }

  // Ensure all required fields are filled in the add-protein form prior to saving the new protein data
  // Continue with addProtein() if all requirements are met
  public onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.proteinService.addProtein(this.addForm.value)
      .subscribe( {
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
  // Get the form short name to access the form fields
  get f() { return this.addForm.controls; }
}
