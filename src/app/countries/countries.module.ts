import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CardModule } from 'primeng/card';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CountriesComponent, CountryComponent],
  imports: [
    CommonModule,
    CardModule,
    SharedModule,
    CountriesRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
  ],
})
export class CountriesModule {}
