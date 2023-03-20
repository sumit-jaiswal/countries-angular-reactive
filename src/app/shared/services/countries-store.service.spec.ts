import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';
import { CountriesStoreService } from './countries-store.service';

describe('CountriesStoreService', () => {
  let service: CountriesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    service = TestBed.inject(CountriesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
