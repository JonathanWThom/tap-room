import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <div *ngFor="let currentKeg of kegs">
      <h5>Name: {{currentKeg.name}}</h5>
      <h5>Brand: {{currentKeg.brand}}</h5>
      <h5>Price: \${{currentKeg.price | number: '1.2-2'}}</h5>
      <h5>Alcohol Content: {{currentKeg.alcoholContent}}%</h5>
      <h5>Style: {{currentKeg.style}}</h5>
      <h5>Pints Remaining: {{currentKeg.pints}}</h5>
      <button class="btn" (click)="editKeg(currentKeg)">Edit</button>
      <button class="btn btn-success" (click)="buyPint(currentKeg)">Buy a Pint</button>
    </div>
    <hr>
    <h2>Low Kegs</h2>
    <div *ngFor="let currentKeg of kegs">
      <h5 *ngIf="currentKeg.pints < 10">{{currentKeg.name}}. Pints remaining: {{currentKeg.pints}}</h5>
    </div>
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
  };

  buyPint(currentKeg) {
    currentKeg.pints -= 1;
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public style: string) { }
}
