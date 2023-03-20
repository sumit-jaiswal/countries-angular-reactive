import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { COUNTRIES_MOCK } from 'src/app/testing';
import { SharedModule } from '../shared.module';
import { of } from 'rxjs';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let countryService: CountryService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    countryService = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(countryService).toBeTruthy();
  });

  it('Should store all countries on service initilization #loadAllCourses', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(COUNTRIES_MOCK[2]));
    countryService.getCountryByCodeParam('IND').subscribe((countries) => {
      expect(countries.length).toEqual(1);
      done();
    });
  });
});
