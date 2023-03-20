import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';

import { CountriesStoreService } from './services/countries-store.service';
import { RegionsDropdownComponent } from './components/regions-dropdown/regions-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CountryService } from './services/country.service';
import { SearchCountryPipe } from './pipe/search-country.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    RegionsDropdownComponent,
    SearchCountryPipe,
  ],
  imports: [
    CommonModule,
    PanelModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [CountriesStoreService, CountryService],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    RegionsDropdownComponent,
    SearchCountryPipe,
  ],
})
export class SharedModule {}
