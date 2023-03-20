import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/model/countries.model';

@Pipe({
  name: 'searchCountry',
})
export class SearchCountryPipe implements PipeTransform {
  transform(value: Country[], text: string): Country[] {
    if (text) {
      return value.filter((country) => {
        let text1 = country.name.common.toUpperCase();
        let text2 = text.toUpperCase();
        return text1.includes(text2);
      });
    }
    return value;
  }
}
