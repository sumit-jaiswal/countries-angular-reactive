import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from './services/countries.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, PanelModule, HttpClientModule],
  providers: [CountriesService],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
