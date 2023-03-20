import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/countries.model';
import { CountriesStoreService } from 'src/app/shared/services/countries-store.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countries$: Observable<Country[]> | undefined;
  public searchText = '';

  constructor(private countriesStoreService: CountriesStoreService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countries$ = this.countriesStoreService.countres$;
  }

  onRegionChange(region: string) {
    this.countries$ = this.countriesStoreService.filterByRegion(region);
  }
}
