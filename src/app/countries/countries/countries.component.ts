import { Component, OnInit } from '@angular/core';
import { COUNTRES } from 'src/app/model/countries.model';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countries: COUNTRES[] | undefined;

  constructor(
    private countriesService: CountriesService,
    private loading: LoadingService
  ) {
    console.log('countries loaded');
    this.getCountries();
  }

  ngOnInit(): void {}

  getCountries() {
    const loadCountries$ = this.countriesService.getCountries();

    this.loading
      .showLoaderUntilCompleted(loadCountries$)
      .subscribe((data: COUNTRES[]) => {
        this.countries = data;
      });
  }
}
