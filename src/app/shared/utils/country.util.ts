import { Country, CurrenciesStr } from 'src/app/model/countries.model';
import { CommonUtil } from './common.util';

export class CountryUtil {
  static sortByPopulation(country1: Country, country2: Country) {
    return country2.population - country1.population;
  }

  static filterByRegion(country: Country, region: string) {
    return country.region == region;
  }

  static restructureCountryData(country: Country): Country {
    if (country) {
      country._currencies = this.parseCurrenciesObject(country);
      country._languages = country.languages
        ? CommonUtil.generateArrayByObj<CurrenciesStr>(country.languages).join(
            ', '
          )
        : '';
      country._tld = country.tld ? country.tld.join(', ') : '';
    }
    return country;
  }

  static parseCurrenciesObject(country: Country): string {
    if (country.currencies) {
      const correncyArr = CommonUtil.generateArrayByObj<CurrenciesStr>(
        country.currencies
      );
      return correncyArr.map((currecy) => currecy.name).join(', ');
    }
    return '';
  }
}
