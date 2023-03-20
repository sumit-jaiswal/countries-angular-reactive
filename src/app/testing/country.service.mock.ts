import { Observable, of } from 'rxjs';
import { Country } from '../model/countries.model';
import { COUNTRIES_MOCK } from './countries.mock';

export class CountryServiceMock {
  getCountryByCodeParam(code: string): Observable<Country[]> {
    return of([COUNTRIES_MOCK[2]]);
  }
}
