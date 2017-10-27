import { Component } from '@angular/core';

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
  animals: Animal[] = [
    new Animal("Lion", "Simba", 5, "Carnivore", "Savanna", 3, "M", "Shade", "Hyennas"),
    new Animal("Yak", "Yolanda", 1, "Herbivore", "Steppes", 2, "F", "Snow", "Warm Weather"),
    new Animal("Penguin", "Bond", 3, "Carnivore", "Antarctic", 1, "M", "Fish", "Seals"),
    new Animal("Moose", "Morris", 1, "Herbivore", "Forrest", 2, "M", "Wading", "Loud noises"),
    new Animal("Racoon", "Rocket", 5, "Omnivore", "Forrest", 2, "M", "Trash cans", "People")
  ]
}
