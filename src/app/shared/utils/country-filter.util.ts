import { Country } from 'src/app/model/countries.model';

export function sortByPopulation(country1: Country, country2: Country) {
  return country2.population - country1.population;
}

export function filterByRegion(country: Country, region: string) {
  return country.region == region;
}
