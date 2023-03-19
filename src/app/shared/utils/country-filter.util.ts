import { COUNTRES } from 'src/app/model/countries.model';

export function sortByPopulation(countries: COUNTRES[], order = 'ASC') {
  return order === 'DESC'
    ? countries.sort((a, b) => b.population - a.population)
    : countries.sort((a, b) => b.population - a.population);
}
