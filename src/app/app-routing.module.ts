import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportSearchComponent } from './views/airport-search/airport-search.component';
import { AirportDetailsComponent } from './views/airport-details/airport-details.component';

const routes: Routes = [
  { path: 'search', component: AirportSearchComponent },
  { path: 'details/:iata', component: AirportDetailsComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
