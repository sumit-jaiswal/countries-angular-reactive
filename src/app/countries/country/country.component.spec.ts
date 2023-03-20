import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CountryService } from 'src/app/shared/services/country.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { COUNTRIES_MOCK } from 'src/app/testing';
import { CountryServiceMock } from 'src/app/testing/country.service.mock';
import { CountriesModule } from '../countries.module';

import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let countrySerive: CountryService;
  let country = { name: 'India', code: 'IND' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesModule, SharedModule, RouterTestingModule],
      declarations: [CountryComponent],
      providers: [
        {
          provide: CountryService,
          useClass: CountryServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: country.code }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryComponent);
    countrySerive = TestBed.inject(CountryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get country details by router pram', () => {
    component.getCountryDetails();
    expect(component.countryDetails?.name.common).toEqual(country.name);
  });

  it('should get borders country if any border available', () => {
    component.getCountryDetails();
    expect(component.countryDetails?.bordersCountry?.length).toEqual(1);
  });
});
