import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, shareReplay } from 'rxjs';
import { Country } from 'src/app/model/countries.model';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient, private loading: LoadingService) {}

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(environment.COUNTRIES_API + '/alpha/' + code)
      .pipe(shareReplay());
  }

  getCountryByCodeParam(code: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(environment.COUNTRIES_API + '/alpha', {
        params: {
          codes: code,
        },
      })
      .pipe(shareReplay());
  }
}
