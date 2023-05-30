import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportSearchFormComponent } from './components/airport-search-form/airport-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AirportSearchResultComponent } from './components/airport-search-result/airport-search-result.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { AirportSearchComponent } from './views/airport-search/airport-search.component';
import { AirportDetailsComponent } from './views/airport-details/airport-details.component';
import { AirportMapComponent } from './components/airport-map/airport-map.component';
import { FlightScheduleComponent } from './components/flight-schedule/flight-schedule.component';
import { LoadingIconComponent } from './components/loading-icon/loading-icon.component';

@NgModule({
  declarations: [AppComponent, AirportSearchFormComponent, AirportSearchResultComponent, WorldMapComponent, AppLogoComponent, AirportSearchComponent, AirportDetailsComponent, AirportMapComponent, FlightScheduleComponent, LoadingIconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
