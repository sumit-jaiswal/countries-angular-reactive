import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesStoreService } from 'src/app/shared/services/countries-store.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let countriesStore: CountriesStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CountriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    countriesStore = TestBed.inject(CountriesStoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get countries obsrable on #getCountries', () => {
    component.getCountries();

    expect(component.countries$).toEqual(countriesStore.countres$);
  });

  it('Should get countires filter data obsrable on #onRegionChange', () => {
    component.onRegionChange('all');
    expect(component.countries$).toEqual(countriesStore.countres$);
  });
});
