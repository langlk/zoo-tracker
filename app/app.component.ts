import { Component } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Seattle Zoo Tracker</h1>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <animal-list [animals]="animalsMaster" (editClick)="edit($event)"></animal-list>
        </div>
        <div class="col-sm-6">
          <edit-animal [animal]="editAnimal" (editDone)="closeEdit()"></edit-animal>
        </div>
      </div>
      <new-animal (addAnimal)="add($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  animalsMaster: Animal[] = [
    new Animal("Lion", "Simba", 5, "Carnivore", "Savanna", 3, "Male", "Shade", "Hyennas"),
    new Animal("Yak", "Yolanda", 1, "Herbivore", "Steppes", 2, "Female", "Snow", "Warm Weather"),
    new Animal("Penguin", "Bond", 3, "Carnivore", "Antarctic", 1, "Male", "Fish", "Seals"),
    new Animal("Moose", "Morris", 1, "Herbivore", "Forrest", 2, "Male", "Wading", "Loud noises"),
    new Animal("Racoon", "Rocket", 5, "Omnivore", "Forrest", 2, "Male", "Trash cans", "People")
  ];
  editAnimal: Animal;

  add(animal: Animal) {
    this.animalsMaster.push(animal);
  }

  edit(animal: Animal) {
    this.editAnimal = animal;
  }

  closeEdit() {
    this.editAnimal = null;
  }
}
