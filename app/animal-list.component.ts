import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <h2>Animals</h2>
    <div class="form-group animal-filter">
      <select name="filter" (change)="onChange($event.target.value)" class="form-control">
        <option value="all">All Animals</option>
        <option value="young">Young Animals Only</option>
        <option value="old">Old Animals Only</option>
      </select>
    </div>
    <div id="animal-panels">
      <div *ngFor="let animal of animals | age:ageType"
        (click)="edit(animal)"
        class="panel panel-default animal-panel">
        <div class="panel-heading">
          <h3>{{animal.name}}</h3>
          <h4>{{animal.sex}} {{animal.species}}, Age {{animal.age}}</h4>
        </div>
        <div class="panel-body">

          <h4>{{animal.diet}}</h4>
          <p><strong>Likes: </strong>{{animal.likes}}</p>
          <p><strong>Dislikes: </strong>{{animal.dislikes}}</p>
        </div>
        <div class="panel-footer">
          <h5>{{animal.location}}</h5>
          <h5 class="caretakers">Caretakers: {{animal.caretakersNeeded}}</h5>
        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() editClick = new EventEmitter();
  ageType: string = "all";

  edit(animal: Animal) {
    this.editClick.emit(animal);
  }

  onChange(chosen: string) {
    this.ageType = chosen;
  }
}
