import { Component } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Seattle Zoo Tracker</h1>
        <div class="options">
          <button type="button" class="btn" (click)="showAll()">
            All Animals
          </button>
          <button type="button" class="btn" (click)="showAdd()">
            Add Animal
          </button>
        </div>
      </div>
      <animal-list
        *ngIf="focusAll"
        [animals]="animalsMaster"
        (editClick)="edit($event)">
      </animal-list>
      <edit-animal
        *ngIf="editAnimal"
        [animal]="editAnimal"
        (editDone)="closeEdit()">
      </edit-animal>
      <new-animal *ngIf="focusAdd" (addAnimal)="add($event)"></new-animal>
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
  focusAll: boolean = true;
  focusAdd: boolean = false;
  editAnimal: Animal;

  add(animal: Animal) {
    this.animalsMaster.push(animal);
    this.showAll();
  }

  showAll() {
    this.focusAll = true;
    this.focusAdd = false;
    this.editAnimal = null;
  }

  showAdd() {
    this.focusAll = false;
    this.focusAdd = true;
    this.editAnimal = null;
  }

  edit(animal: Animal) {
    this.editAnimal = animal;
    this.focusAll = false;
  }

  closeEdit() {
    this.editAnimal = null;
    this.focusAll = true;
  }
}
