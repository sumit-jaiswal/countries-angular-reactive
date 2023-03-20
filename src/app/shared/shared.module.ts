import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PanelModule } from 'primeng/panel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

import { CountriesService } from './services/countries.service';
import { LoadingService } from './services/loading.service';
import { RegionsDropdownComponent } from './components/regions-dropdown/regions-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    RegionsDropdownComponent,
  ],
  imports: [
    CommonModule,
    PanelModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [CountriesService],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    RegionsDropdownComponent,
  ],
})
export class SharedModule {}
