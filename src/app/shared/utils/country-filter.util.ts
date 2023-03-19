import { COUNTRES } from 'src/app/model/countries.model';

export function sortByPopulation(country1: COUNTRES, country2: COUNTRES) {
  return country2.population - country1.population;
}
