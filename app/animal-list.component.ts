import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <h2>All Animals</h2>
    <select (change)="onChange($event.target.value)" class="form-control">
      <option value="all">All Animals</option>
      <option value="young">Young Animals Only</option>
      <option value="old">Old Animals Only</option>
    </select>
    <div id="animal-panels">
      <div *ngFor="let animal of animals | age:ageType"
        (click)="edit(animal)"
        class="panel panel-default">
        <div class="panel-heading">
          <h3 class="card-header">{{animal.name}}</h3>
        </div>
        <div class="panel-body">
          <h4>{{animal.sex}} {{animal.species}}, Age {{animal.age}}</h4>
          <h4>{{animal.diet}}</h4>
          <p><strong>Likes: </strong>{{animal.likes}}</p>
          <p><strong>Dislikes: </strong>{{animal.dislikes}}</p>
        </div>
        <div class="panel-footer">
          <h5>{{animal.location}}</h5>
          <h5>Caretakers: {{animal.caretakersNeeded}}</h5>
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
