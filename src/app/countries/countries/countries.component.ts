import { Component, OnInit } from '@angular/core';
import { COUNTRES } from 'src/app/model/countries.model';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public countries: COUNTRES[] | undefined;

  constructor(private countriesService: CountriesService) {
    console.log('countries loaded');
    this.getCountries();
  }

  ngOnInit(): void {}

  getCountries() {
    this.countriesService.getCountries().subscribe((data: COUNTRES[]) => {
      this.countries = data;
    });
  }
}
