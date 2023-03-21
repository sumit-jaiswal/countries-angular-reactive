import { Country, CurrenciesStr } from 'src/app/model/countries.model';
// Below code need to manage in class
export function sortByPopulation(country1: Country, country2: Country) {
  return country2.population - country1.population;
}

export function filterByRegion(country: Country, region: string) {
  return country.region == region;
}

export function generateArrayByObj<T>(obj: {}): T[] {
  return Object.values<T>(obj);
}

export function restructureCountryData(country: Country): Country {
  console.log(generateArrayByObj<CurrenciesStr>(country.currencies));
  country._currencies = parseCurrenciesObject(country);
  country._languages = generateArrayByObj<CurrenciesStr>(
    country.languages
  ).join(', ');
  country._tld = country.tld.join(', ');
  return country;
}

function parseCurrenciesObject(country: Country): string {
  const correncyArr = generateArrayByObj<CurrenciesStr>(country.currencies);
  return correncyArr.map((currecy) => currecy.name).join(', ');
}
