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
    <ul>
      <li *ngFor="let animal of animals | age:ageType"
        (click)="edit(animal)">
        {{animal.name}} - {{animal.species}}
      </li>
    </ul>
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
