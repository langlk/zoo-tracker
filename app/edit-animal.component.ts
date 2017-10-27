import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div id="edit-animal" class="animal-form">
      <h2>Edit Animal</h2>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input [(ngModel)]="animal.name" name="name" class="form-control">
        </div>

        <div class="row">
          <div class="form-group col-xs-6">
            <label for="species">Species:</label>
            <input [(ngModel)]="animal.species" name="species" class="form-control">
          </div>
          <div class="form-group col-xs-6">
            <label for="diet">Diet:</label>
            <input [(ngModel)]="animal.diet" name="diet" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="form-group col-xs-6">
            <label for="location">Location:</label>
            <input [(ngModel)]="animal.location" name="location" class="form-control">
          </div>
          <div class="form-group col-xs-6">
            <label for="caretakers-needed">Caretakers Needed:</label>
            <input [(ngModel)]="animal.caretakersNeeded" name="caretakers-needed" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="form-group col-xs-6">
            <label for="age">Age:</label>
            <input [(ngModel)]="animal.age" name="age" class="form-control">
          </div>
          <div class="form-group col-xs-6">
            <label for="sex">Sex:</label>
            <input [(ngModel)]="animal.sex" name="sex" class="form-control">
          </div>
        </div>

        <div class="row">
          <div class="form-group col-xs-6">
            <label for="likes">Likes:</label>
            <input [(ngModel)]="animal.likes" name="likes" class="form-control">
          </div>
          <div class="form-group col-xs-6">
            <label for="dislikes">Dislikes:</label>
            <input [(ngModel)]="animal.dislikes" name="dislikes" class="form-control">
          </div>
        </div>
        
        <button type="button" class="btn" (click)="done()">Done Editing</button>
      </form>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() animal: Animal;
  @Output() editDone = new EventEmitter();

  done() {
    this.editDone.emit();
  }
}
