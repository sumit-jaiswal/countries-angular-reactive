import { TestBed } from '@angular/core/testing';
import { CountriesStoreService } from './countries-store.service';

describe('CountriesStoreService', () => {
  let service: CountriesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
