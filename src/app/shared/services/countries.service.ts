import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { COUNTRES } from 'src/app/model/countries.model';
import { environment } from 'src/environments/environment';
import { sortByPopulation } from '../utils/country-filter.util';

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<COUNTRES[]> {
    return this.http
      .get<COUNTRES[]>(environment.COUNTRIES_API + '/all', {
        params: {
          fields:
            'name,population,region,region,borders,tld,currencies,languages,flags,capital',
        },
      })
      .pipe(
        map((countres) => sortByPopulation(countres)),
        shareReplay()
      );
  }
}
