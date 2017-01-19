import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <label>Filter By</label>
  <select (change)="onChange($event.target.value)">
    <option value="allStyles" selected="selected">All Styles</option>
    <option value="Belgian Ale">Belgian Ale</option>
    <option value="Red Ale">Red Ale</option>
    <option value="Lager">Lager</option>
    <option value="Stout">Stout</option>
    <option value="IPA">IPA</option>
    <option value="Other">Other</option>
  </select>
  <div class="row">
    <div *ngFor="let currentKeg of childKegList | style:filterByStyle" [class]="styleColor(currentKeg)" [ngClass]="['col-sm-4', 'well']">
      <h5>Name: {{currentKeg.name}}</h5>
      <h5>Brand: {{currentKeg.brand}}</h5>
      <h5>Price: \${{currentKeg.price | number: '1.2-2'}}</h5>
      <h5>Alcohol Content: {{currentKeg.alcoholContent}}%</h5>
      <h5>Style: {{currentKeg.style}}</h5>
      <h5>Pints Remaining: {{currentKeg.pints}}</h5>
      <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      <sell-beer [currentKeg]="currentKeg" (pintClickSender)="sellPintClicked($event)" (bigGrowlerClickSender)="sellBigGrowlerClicked($event)" (growlerClickSender)="sellGrowlerClicked($event)"></sell-beer>
      <!--<button class="btn btn-success" (click)="sellPintClicked(currentKeg)">Sell a Pint</button>
      <button class="btn btn-info" (click)="sellGrowlerClicked(currentKeg)">Sell a Growler</button>
      <button class="btn btn-warning" (click)="sellBigGrowlerClicked(currentKeg)">Sell a Big Growler</button>-->
      <button *ngIf="currentKeg.onSale === false" class="btn btn-danger" (click)="onSale(currentKeg)">Put on Sale</button>
      <button *ngIf="currentKeg.onSale === true" class="btn btn-danger" (click)="offSale(currentKeg)">Take off Sale</button>
      <div *ngIf="currentKeg.alcoholContent >= 5">
      <h1>!!!</h1>
      </div>
    </div>
  </div>

  <hr>
  <h2>Low Kegs</h2>
  <div *ngFor="let currentKeg of childKegList">
    <h5 *ngIf="currentKeg.pints < 10">{{currentKeg.name}}. Pints remaining: {{currentKeg.pints}}</h5>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editClickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();
  @Output() growlerClickSender = new EventEmitter();
  @Output() bigGrowlerClickSender = new EventEmitter();

  sellPintClicked(currentKeg: Keg) {
    this.pintClickSender.emit(currentKeg);
  }

  sellGrowlerClicked(currentKeg: Keg) {
    this.growlerClickSender.emit(currentKeg);
  }

  sellBigGrowlerClicked(currentKeg: Keg) {
    this.bigGrowlerClickSender.emit(currentKeg);
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.editClickSender.emit(kegToEdit);
  }

  filterByStyle: string = "allStyles";

  onChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
  }

  onSale(currentKeg) {
    currentKeg.onSale = true;
    currentKeg.price *= .8;
  }

  offSale(currentKeg) {
    currentKeg.onSale = false;
    currentKeg.price *= 1.25;
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
