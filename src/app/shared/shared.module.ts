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

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingComponent],
  imports: [CommonModule, PanelModule, HttpClientModule, ProgressSpinnerModule],
  providers: [CountriesService],
  exports: [HeaderComponent, FooterComponent, LoadingComponent],
})
export class SharedModule {}
