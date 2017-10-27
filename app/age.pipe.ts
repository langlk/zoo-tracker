import { Pipe, PipeTransform } from '@angular/core';

import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageType) {
    if (ageType == "young") {
      return input.filter(function(animal) {
        return animal.age < 2;
      });
    } else if (ageType == "old") {
      return input.filter(function(animal) {
        return animal.age >= 2;
      });
    } else {
      return input;
    }
  }
}
