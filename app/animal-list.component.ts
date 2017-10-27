import { Component, Input } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <h2>All Animals</h2>
    <ul>
      <li *ngFor="let animal of animals">
        {{animal.name}} - {{animal.species}}
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
}
