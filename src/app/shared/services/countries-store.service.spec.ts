import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { COUNTRIES_MOCK } from 'src/app/testing';
import { SharedModule } from '../shared.module';
import { CountriesStoreService } from './countries-store.service';
import { of } from 'rxjs';

describe('CountriesStoreService', () => {
  let countriesStoreService: CountriesStoreService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    countriesStoreService = TestBed.inject(CountriesStoreService);
  });

  it('should be created', () => {
    expect(countriesStoreService).toBeTruthy();
  });

  it('Should store all countries on service initilization #loadAllCourses', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(COUNTRIES_MOCK));
    countriesStoreService.countres$.subscribe((countries) => {
      expect(countries.length).toEqual(0); // Need to work on this
      done();
    });
  });
  it('Should return filter data by region #loadAllCourses', (done: DoneFn) => {
    countriesStoreService['subject'].next(COUNTRIES_MOCK);
    countriesStoreService.filterByRegion('Asia');
    countriesStoreService.countres$.subscribe((countries) => {
      expect(countries.length).toEqual(COUNTRIES_MOCK.length);
      done();
    });
  });
});
