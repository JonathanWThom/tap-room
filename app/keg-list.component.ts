import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">

    <div class="filter">
      <label>Filter By</label>
      <select class="form-control" (change)="onChange($event.target.value)">
        <option value="allStyles" selected="selected">All Styles</option>
        <option value="Belgian Ale">Belgian Ale</option>
        <option value="Red Ale">Red Ale</option>
        <option value="Lager">Lager</option>
        <option value="Stout">Stout</option>
        <option value="IPA">IPA</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div *ngFor="let currentKeg of childKegList | style:filterByStyle" [class]="styleColor(currentKeg)" [ngClass]="['col-sm-12', 'keg']">

      <div class="keg-header">
        <p class="name">{{currentKeg.name}}</p>
        <p class="brand">{{currentKeg.brand}}</p>
      </div>
      <div class="keg-details">
        <p class="price">Price: \${{currentKeg.price | number: '1.2-2'}}</p> |
        <p class="alcohol">Alcohol Content: {{currentKeg.alcoholContent}}%</p> |
        <p class="style">Style: {{currentKeg.style}}</p> | 
        <p class="pints">Pints Remaining: {{currentKeg.pints}}</p>
      </div>

      <div class="keg-sell">
        <sell-beer [currentKeg]="currentKeg" (pintClickSender)="sellPintClicked($event)" (bigGrowlerClickSender)="sellBigGrowlerClicked($event)" (growlerClickSender)="sellGrowlerClicked($event)"></sell-beer>
      </div>

      <div class="keg-buttons">
        <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
        <on-sale [currentKeg]="currentKeg" (onSaleClickSender)="onSale($event)" (offSaleClickSender)="offSale($event)"></on-sale>
      </div>

      <div *ngIf="currentKeg.alcoholContent >= 5" class="alcohol-alert">
      <img src="../../resources/img/drunk.png" alt="High Alcohol Content!">
      </div>

    </div>
  </div>

  <div class="low-kegs">
    <div *ngFor="let currentKeg of childKegList">
      <h4 *ngIf="currentKeg.pints < 10">{{currentKeg.name}} only has {{currentKeg.pints}} pints remaining.</h4>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editClickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();
  @Output() growlerClickSender = new EventEmitter();
  @Output() bigGrowlerClickSender = new EventEmitter();
  @Output() onSaleClickSender = new EventEmitter();
  @Output() offSaleClickSender = new EventEmitter();

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

  onSale(currentKeg: Keg) {
    this.onSaleClickSender.emit(currentKeg);
  }

  offSale(currentKeg: Keg) {
    this.offSaleClickSender.emit(currentKeg);
  }

  filterByStyle: string = "allStyles";

  onChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
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
