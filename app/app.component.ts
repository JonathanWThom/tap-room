import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list></keg-list>
    <hr>
    <div class="edit" *ngIf="selectedKeg">
      <h2>Edit Keg</h2>
      <label>Name</label>
      <input [(ngModel)]="selectedKeg.name">
      <label>Brand</label>
      <input [(ngModel)]="selectedKeg.brand">
      <label>Price</label>
      <input [(ngModel)]="selectedKeg.price">
      <label>Alcohol Content</label>
      <input [(ngModel)]="selectedKeg.alcoholContent">
      <label>Style</label>
      <input [(ngModel)]="selectedKeg.style">
      <button class="btn" (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
