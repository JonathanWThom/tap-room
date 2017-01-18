import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list [childKegList]="masterKegList"></keg-list>
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

  masterKegList: Keg[] = [
    new Keg('Wanderale', 'Wander Brewing', 5, 6, 'Belgian Ale'),
    new Keg('Kulshan Red Ale', 'Kulshan Brewing', 5, 5, 'Red Ale'),
    new Keg('Budweiser', 'Budweiser', 3, 2.5, 'Lager'),
    new Keg('Guiness', 'Guiness', 6, 6, 'Stout'),
    new Keg('Racer Five IPA', 'Racer 5', 5, 6.5, 'IPA')
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
