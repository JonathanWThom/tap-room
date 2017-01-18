import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">
        {{currentKeg.name}}<br>
        <button class="btn" (click)="editKeg(currentKeg)">Edit</button>
      </li>
    </ul>
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
  kegs: Keg[] = [
    new Keg('Wanderale', 'Wander Brewing', 5, 6, 'Belgian Ale'),
    new Keg('Kulshan Red Ale', 'Kulshan Brewing', 5, 5, 'Red Ale'),
    new Keg('Budweiser', 'Budweiser', 3, 2.5, 'Yellow Water')
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  };

  finishedEditing() {
    this.selectedKeg = null;
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public style: string) { }
}
