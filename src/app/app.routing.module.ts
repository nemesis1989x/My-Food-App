import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FoodSelectionComponent} from './food-selection/food-selection.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/food-select', pathMatch: 'full'},
  { path: 'food-select', component: FoodSelectionComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
