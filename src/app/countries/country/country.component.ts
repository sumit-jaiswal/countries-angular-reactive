import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Subject, takeUntil } from 'rxjs';
import { Country } from 'src/app/model/countries.model';
import { CountryService } from 'src/app/shared/services/country.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public countryDetails: Country | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.getCountryDetails();
  }

  getCountryDetails() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.loader.loadingOn();

      let code = params['id'];
      if (code) {
        this.countryService
          .getCountryByCodeParam(code)
          .pipe(
            takeUntil(this.destroy$),
            mergeMap((country) => {
              const codes = country[0]?.borders?.join(',');

              return this.countryService.getCountryByCodeParam(codes).pipe(
                map((borderCountries) => {
                  country[0].bordersCountry = borderCountries;
                  return country[0];
                })
              );
            })
          )
          .subscribe((countryDetails) => {
            this.loader.loadingOff();
            this.countryDetails = countryDetails;
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
