import { Routes } from '@angular/router';
import { AddTrip } from './add-trip/add-trip';
import { TripListing } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';
import { DeleteTrip } from './delete-trip/delete-trip';

export const routes: Routes = [
    { path: 'add-trip', component: AddTrip },
    { path: 'edit-trip', component: EditTrip },
    { path: 'delete-trip', component: DeleteTrip},
    { path: '', component: TripListing}
];
