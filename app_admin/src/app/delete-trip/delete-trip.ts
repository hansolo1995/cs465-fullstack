import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-delete-trip',
  imports: [CommonModule],
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css'
})

export class DeleteTrip implements OnInit {

  constructor(
    private router: Router,
    private tripService: TripData
  ) { }

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');

    if (!tripCode) 
    {
      alert('Error occurred - Could not find where I stashed tripCode!');
      this.router.navigate(['']);
      return;
    }

    this.tripService.deleteTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        }
      });

  }

}
