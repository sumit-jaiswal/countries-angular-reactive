import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CardModule } from 'primeng/card';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountriesComponent, CountryComponent],
  imports: [CommonModule, CardModule, SharedModule, CountriesRoutingModule],
})
export class CountriesModule {}
