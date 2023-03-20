import { COUNTRIES_MOCK } from 'src/app/testing/countries.mock';
import { SearchCountryPipe } from './search-country.pipe';

fdescribe('SearchCountryPipe', () => {
  it('Create an instance', () => {
    const pipe = new SearchCountryPipe();
    expect(pipe).toBeTruthy();
  });

  it('Search country by name', () => {
    const searchCountryPipe = new SearchCountryPipe();
    expect(searchCountryPipe.transform(COUNTRIES_MOCK, 'india').length).toBe(1);
  });

  it('If search string Empty then no action perform and return same array', () => {
    const searchCountryPipe = new SearchCountryPipe();
    expect(searchCountryPipe.transform(COUNTRIES_MOCK, '').length).toBe(3);
  });
});
