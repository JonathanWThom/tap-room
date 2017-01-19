import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div class="form" *ngIf="childSelectedKeg">
    <h3>Edit {{childSelectedKeg.name}}</h3>
    <div class="form-input">
      <label>Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div class="form-input">
      <label>Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div class="form-input">
      <label>Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
    </div>
    <div class="form-input">
      <label>Alcohol %:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
    </div>
    <div class="form-input">
      <label>Style</label>
      <select [(ngModel)]="childSelectedKeg.style" class="form-control">
        <option value="Belgian Ale">Belgian Ale</option>
        <option value="Red Ale">Red Ale</option>
        <option value="Lager">Lager</option>
        <option value="IPA">IPA</option>
        <option value="Stout">Stout</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <button class="btn btn-block" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneClickedSender.emit();
  }

}
