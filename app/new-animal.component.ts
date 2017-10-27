import { Component, Output, EventEmitter } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>Add an Animal</h2>
    <form>
      <div class="form-group">
        <label for="newSpecies">Species:</label>
        <input #newSpecies class="form-control">
      </div>
      <div class="form-group">
        <label for="newName">Name:</label>
        <input #newName class="form-control">
      </div>
      <div class="form-group">
        <label for="newAge">Age:</label>
        <input #newAge class="form-control">
      </div>
      <div class="form-group">
        <label for="newDiet">Diet:</label>
        <input #newDiet class="form-control">
      </div>
      <div class="form-group">
        <label for="newLocation">Location:</label>
        <input #newLocation class="form-control">
      </div>
      <div class="form-group">
        <label for="newCaretakers">Number of Caretakers:</label>
        <input #newCaretakers class="form-control">
      </div>
      <div class="form-group">
        <label for="newSex">Sex:</label>
        <input #newSex class="form-control">
      </div>
      <div class="form-group">
        <label for="newLikes">Likes:</label>
        <input #newLikes class="form-control">
      </div>
      <div class="form-group">
        <label for="newDislikes">Dislikes:</label>
        <input #newDislikes class="form-control">
      </div>
      <button type="button" class="btn"
      (click)="add(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes); newDescription.value='';">
        Submit
      </button>
    </form>
  `
})

export class NewAnimalComponent {
  @Output() addAnimal = new EventEmitter();

  add(species: string, name: string, age: number, diet: string, location: string, caretakersNeeded: number, sex: string, likes: string, dislikes: string) {

    var animal = new Animal(species, name, age, diet, location, caretakersNeeded, sex, likes, dislikes);
    this.addAnimal.emit(animal);
  }
}
