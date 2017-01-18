import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div class="edit" *ngIf="childSelectedKeg">
    <h2>Edit Keg</h2>
    <label>Name</label>
    <input [(ngModel)]="childSelectedKeg.name">
    <label>Brand</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label>Price</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <label>Alcohol Content</label>
    <input [(ngModel)]="childSelectedKeg.alcoholContent">
    <label>Style</label>
    <input [(ngModel)]="childSelectedKeg.style">
    <button class="btn" (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  // selectedKeg = null;
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneClickedSender.emit();
  }

}
