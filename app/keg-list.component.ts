import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList" [class]="styleColor(currentKeg)">
    <h5>Name: {{currentKeg.name}}</h5>
    <h5>Brand: {{currentKeg.brand}}</h5>
    <h5>Price: \${{currentKeg.price | number: '1.2-2'}}</h5>
    <h5>Alcohol Content: {{currentKeg.alcoholContent}}%</h5>
    <h5>Style: {{currentKeg.style}}</h5>
    <h5>Pints Remaining: {{currentKeg.pints}}</h5>
    <button class="btn" (click)="editKeg(currentKeg)">Edit</button>
    <button class="btn btn-success" (click)="sellPint(currentKeg)">Sell a Pint</button>
    <button class="btn btn-info" (click)="sellGrowler(currentKeg)">Sell a Growler</button>
    <button class="btn btn-warning" (click)="sellBigGrowler(currentKeg)">Sell a Big Growler</button>
    <button *ngIf="currentKeg.onSale === false" class="btn btn-danger" (click)="onSale(currentKeg)">Put on Sale</button>
    <button *ngIf="currentKeg.onSale === true" class="btn btn-danger" (click)="offSale(currentKeg)">Take off Sale</button>
    <div *ngIf="currentKeg.alcoholContent >= 5">
    <h1>!!!</h1>
    </div>
  </div>
  <button class="btn btn-success" (click)="happyHour()">Happy Hour</button>
  <hr>
  <h2>Low Kegs</h2>
  <div *ngFor="let currentKeg of kegs">
    <h5 *ngIf="currentKeg.pints < 10">{{currentKeg.name}}. Pints remaining: {{currentKeg.pints}}</h5>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];


  onSale(currentKeg) {
    currentKeg.onSale = true;
    currentKeg.price *= .8;
  }

  offSale(currentKeg) {
    currentKeg.onSale = false;
    currentKeg.price *= 1.25;
  }

  happyHour() {
    for (let keg of this.childKegList) {
      if (keg.onSale === false) {
        keg.onSale = true;
        keg.price *= 0.8;
      } else {
        keg.onSale = false;
        keg.price *= 1.25;
      }
    }
  }

  sellPint(currentKeg) {
    currentKeg.pints -= 1;
  }

  sellGrowler(currentKeg) {
    currentKeg.pints -= 2;
  }

  sellBigGrowler(currentKeg) {
    currentKeg.pints -= 4;
  }

  styleColor(currentKeg) {
    if (currentKeg.onSale === true) {
      return "sale";
    } else if (currentKeg.style === "Belgian Ale") {
      return "belgian-ale";
    } else if (currentKeg.style === "Red Ale") {
      return "red-ale";
    } else if (currentKeg.style === "Lager") {
      return "lager";
    } else if (currentKeg.style === "Stout") {
      return "stout";
    } else if (currentKeg.style === "IPA") {
      return "ipa";
    } else {
      return "other";
    }
  }
}