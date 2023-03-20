import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/countries.model';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countries$: Observable<Country[]> | undefined;
  public searchText = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countries$ = this.countriesService.countres$;
  }

  onRegionChange(region: string) {
    this.countries$ = this.countriesService.filterByRegion(region);
  }
}
