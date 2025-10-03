/**
 * Author:      Hansol Lee
 * Description: Application Routing file that defines all of the application's routes and associated paths
 */

import { Routes } from '@angular/router';
import { AddProtein } from './add-protein/add-protein';
import { ProteinListing } from './protein-listing/protein-listing';
import { EditProtein } from './edit-protein/edit-protein';
import { DeleteProtein } from './delete-protein/delete-protein';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    { path: 'add-protein', component: AddProtein },
    { path: 'edit-protein', component: EditProtein },
    { path: 'delete-protein', component: DeleteProtein},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: '', component: ProteinListing, pathMatch: 'full'}
];
