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

@NgModule({
  declarations: [AppComponent, AirportSearchFormComponent, AirportSearchResultComponent, WorldMapComponent, AppLogoComponent],
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
